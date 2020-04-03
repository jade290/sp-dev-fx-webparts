/**
 * ExtensionService
 */
import { HttpClient, IHttpClientOptions, HttpClientResponse } from "@microsoft/sp-http";
import { ICalendarService } from "..";
import { BaseCalendarService } from "../BaseCalendarService";
import { ICalendarEvent } from "../ICalendarEvent";
import { Web } from "@pnp/sp";
import { combine } from "@pnp/common";

export class ApiCalendarService extends BaseCalendarService
  implements ICalendarService {
  constructor() {
    super();
    this.Name = "API";
  }

  // private token = async ():  Promise<Object> => {
  //   let Objtoken =  Object.create(this.getAuthToken());
  //   console.log(Objtoken);
  //   return Objtoken.access_token;
  // }

  protected fetchJsonResponse(feedUrl: string) : Promise<HttpClientResponse> {
    const postURL = "https://avoratech.sharepoint.com/sites/AvoraCommunity/_api/web/lists/GetByTitle('SharePoint%20Calendar')/items";
    const token = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IllNRUxIVDBndmIwbXhvU0RvWWZvbWpxZmpZVSIsImtpZCI6IllNRUxIVDBndmIwbXhvU0RvWWZvbWpxZmpZVSJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvYXZvcmF0ZWNoLnNoYXJlcG9pbnQuY29tQDIzZDBiNmIwLTM2ZTEtNGM5ZC05OGZhLTljMjM2NmM4Y2ZlNSIsImlzcyI6IjAwMDAwMDAxLTAwMDAtMDAwMC1jMDAwLTAwMDAwMDAwMDAwMEAyM2QwYjZiMC0zNmUxLTRjOWQtOThmYS05YzIzNjZjOGNmZTUiLCJpYXQiOjE1ODU5MjQ3NTQsIm5iZiI6MTU4NTkyNDc1NCwiZXhwIjoxNTg1OTUzODU0LCJpZGVudGl0eXByb3ZpZGVyIjoiMDAwMDAwMDEtMDAwMC0wMDAwLWMwMDAtMDAwMDAwMDAwMDAwQDIzZDBiNmIwLTM2ZTEtNGM5ZC05OGZhLTljMjM2NmM4Y2ZlNSIsIm5hbWVpZCI6IjZhMjE1NGFmLTY1MzEtNDUyOC05NzhiLTZiYjA2OTAyYzgzOEAyM2QwYjZiMC0zNmUxLTRjOWQtOThmYS05YzIzNjZjOGNmZTUiLCJvaWQiOiI0NDNhZjRmZC0yOTMyLTQzZDItOGVjNS1mZDA3ZWZlODZlZDIiLCJzdWIiOiI0NDNhZjRmZC0yOTMyLTQzZDItOGVjNS1mZDA3ZWZlODZlZDIiLCJ0cnVzdGVkZm9yZGVsZWdhdGlvbiI6ImZhbHNlIn0.kNcibr-84eDZYJC3rXgeWKHtcY2FRLtAt15M74emxpoaFTC1jClOi5ZCKFchxdWSzgvf6N6KsmQRLSq40c_6QezE8eowN80BWGPTrl0qWM4Pg-W0KuQia3ojsAW6REgevGiF0ANB4bZWGiRcHfGZV34n1aNFXRIUd6eUQ2A489lNr2MKXVc8_Se07qvv_iEVIpA83-6z-UaZe2eM_BztcqdDjhKdY6IrgMAhqMf8fVbrXNlQys9mI4_KFp1cztdcRWCTJLzIOKjNMaB9cEdCgyCv3ts8LM88rZstoNB7wmOgEsgAEcHM8pMnHV_9jEStev9JItKWRWD-4mRssPKwlg";
    const requestHeaders: Headers = new Headers();
    requestHeaders.append('Content-type', 'application/json');
    //For an OAuth token
    requestHeaders.append('Authorization', token);
    requestHeaders.append('Accept', 'application/json;odata=verbose');

    const httpClientOptions: IHttpClientOptions = {
      headers: requestHeaders
    };

    console.log("About to make REST API request.");

    return this.Context.httpClient.get(
      postURL,
      HttpClient.configurations.v1,
      httpClientOptions)
      .then((response) => {
        console.log("REST API response received.");
        console.log(response.json);
        return response.json();
      });
  }
  //Token expires in less than 24 hours so lets get a new one with each request
  // Access is denied, this method does not work
  private getAuthToken(): Promise<HttpClientResponse> {
    const clientId = "6a2154af-6531-4528-978b-6bb06902c838";
    const clientSecret = "cZcE01DKq2dDibj3iel4tOUNsC7+y9FvwFM0D18Iezw=";
    const tenantId= "23d0b6b0-36e1-4c9d-98fa-9c2366c8cfe5";
    //const postURL = "https://cors-anywhere.herokuapp.com/" + "http://accounts.accesscontrol.windows.net/"+ tenantId +"/OAuth/2";
    const postURL = "https://accounts.accesscontrol.windows.net/23d0b6b0-36e1-4c9d-98fa-9c2366c8cfe5/tokens/OAuth/2";

    const requestHeaders: Headers = new Headers();
    requestHeaders.append('Content-type', 'application/x-www-form-urlencoded');
    requestHeaders.append('grant_type', "client_credentials");
    requestHeaders.append('resource', '00000003-0000-0ff1-ce00-000000000000/avoratech.sharepoint.com@' + tenantId);
    requestHeaders.append('client_id', clientId + "@" + tenantId);
    requestHeaders.append('client_secret', clientSecret);
    const httpClientOptions: IHttpClientOptions = {
      headers: requestHeaders
    };

    console.log("About to make token request.");

    return this.Context.httpClient.post(
      postURL,
      HttpClient.configurations.v1,
      httpClientOptions)
      .then((response) => {
        console.log("REST API response received.");
        console.log("Token Orgi: " + response.json);
        return response;
      });
  }

  public getEvents = async (): Promise<ICalendarEvent[]> => {
    const parameterizedFeedUrl: string = this.replaceTokens(
      this.FeedUrl,
      this.EventRange
    );

    // Get the URL
    let webUrl = parameterizedFeedUrl.toLowerCase();
    console.log("webUrl: " + webUrl);

    // Break the URL into parts
    let urlParts = webUrl.split("/");
    console.log("urlParts: " + urlParts);

    // Get the web root
    let webRoot = urlParts[0] + "/" + urlParts[1] + "/" + urlParts[2];
    console.log("webRoot: " + webRoot);

    // Get the list URL
    let listUrl = webUrl.substring(webRoot.length);
    console.log("listUrl: " + listUrl);

    // Find the "lists" portion of the URL to get the site URL
    let webLocation = listUrl.substr(0, listUrl.indexOf("lists/")).replace("_api/web/", "");
    console.log("webLocation: " + webLocation);
    let siteUrl = webRoot + webLocation;

    console.log("siteUrl: " + siteUrl);

    let data = await this.fetchJsonResponse(webRoot + listUrl);
    if (data) {
      let data2 = Object.create(data);
      console.log("Title: " + data2.d.results[0].Title);

      // Open the web associated to the site
      let web = new Web(siteUrl);

      // Build a filter so that we don't retrieve every single thing unless necesssary
      let dateFilter: string = "EventDate ge datetime'" + this.EventRange.Start.toISOString() + "' and EndDate lt datetime'" + this.EventRange.End.toISOString() + "'";
      try {

        // Once we get the list, convert to calendar events
        let events: ICalendarEvent[] = data2.d.results.map((item: any) => {
          let eventUrl: string = combine(siteUrl, "Lists/SharePoint%20Calendar/DispForm.aspx?ID=" + item.Id);
          const eventItem: ICalendarEvent = {
            title: item.Title,
            start: item.EventDate,
            end: item.EndDate,
            url: eventUrl,
            allDay: item.fAllDayEvent,
            category: item.Category,
            description: item.Description,
            location: item.Location
          };
          return eventItem;
        });
        //   // Return the calendar items
        return events;
      }
      catch (error) {
        console.log("Exception caught by catch in SharePoint provider", error);
        throw error;
      }
    }
  }
}
