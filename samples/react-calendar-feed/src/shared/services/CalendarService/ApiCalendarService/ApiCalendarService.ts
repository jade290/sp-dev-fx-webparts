/**
 * ExtensionService
 */
import { HttpClient, IHttpClientOptions, HttpClientResponse } from "@microsoft/sp-http";
import { ICalendarService } from "..";
import { BaseCalendarService } from "../BaseCalendarService";
import { ICalendarEvent } from "../ICalendarEvent";
import { Web } from "@pnp/sp";
import { combine } from "@pnp/common";
import * as strings from "CalendarFeedSummaryWebPartStrings";

export class ApiCalendarService extends BaseCalendarService
  implements ICalendarService {
  constructor() {
    super();
    this.Name = "API";
    //this.FeedUrl = "https://avoratech.sharepoint.com/sites/AvoraCommunity/_api/web/lists/GetByTitle('SharePoint%20Calendar')/items";
    console.log("Arrived at API Service");
    console.log("TEST FeedUrl Constructor: " + this.FeedUrl);
    console.log("TEST DDL Choice Constructor: " + this.SiteEventListsDdlChoice);
  }

  protected onInit() {
    console.log("TEST DDL Choice Init: " + this.SiteEventListsDdlChoice);
  }

  protected fetchJsonResponse(feedUrl: string) : Promise<HttpClientResponse> {
    console.log("API Service fetchJsonResponse method called.");
    console.log("FeedUrl: "+ feedUrl);
    //const postURL = strings.Site +"_api/web/lists/GetByTitle('SharePoint%20Calendar')/items";
    const postURL = strings.Site +"_api/web/lists/GetByTitle('"+ strings.ListName  +"')/items";
    const token = strings.Token;
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
    //const postURL = "https://cors-anywhere.herokuapp.com/" + "http://accounts.accesscontrol.windows.net/"+ tenantId +"/OAuth/2";
    const postURL = "https://accounts.accesscontrol.windows.net/23d0b6b0-36e1-4c9d-98fa-9c2366c8cfe5/tokens/OAuth/2";

    const requestHeaders: Headers = new Headers();
    requestHeaders.append('Content-type', 'application/x-www-form-urlencoded');
    requestHeaders.append('grant_type', "client_credentials");
    requestHeaders.append('resource', '00000003-0000-0ff1-ce00-000000000000/avoratech.sharepoint.com@' + strings.TenantId);
    requestHeaders.append('client_id', strings.ClientId + "@" + strings.TenantId);
    requestHeaders.append('client_secret', strings.ClientSecret);
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
    console.log("API Service getEvents method called.");
    const parameterizedFeedUrl: string = this.replaceTokens(
      this.FeedUrl,
      this.EventRange,
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

    console.log("TEST DDL Choice2: " + this.SiteEventListsDdlChoice);

    let data = await this.fetchJsonResponse(webRoot + listUrl);
    if (data) {
      let data2 = Object.create(data);
      console.log("Title: " + data2.d.results[0].Title);

      // Open the web associated to the site
      let web = new Web(siteUrl);

      try {

        // Once we get the list, convert to calendar events
        let events: ICalendarEvent[] = data2.d.results.map((item: any) => {
          //let eventUrl: string = combine(strings.Site, "Lists/SharePoint%20Calendar/DispForm.aspx?ID=" + item.Id);
          let eventUrl: string = combine(strings.Site, "Lists/"+ strings.ListName  +"/DispForm.aspx?ID=" + item.Id);
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
        // Build a filter so that we don't retrieve every single thing unless necesssary
          events = events.filter((item: any) =>
            new Date(item.start).getTime() >= this.EventRange.Start.getTime() && 
            new Date(item.start).getTime() <= this.EventRange.End.getTime());

        // Sort the events by start date time
          events = events.sort((item: any, item2: any) =>
            new Date(item.start).getTime() - new Date(item2.start).getTime());
        
        // Return the calendar items
          return events;
      }
      catch (error) {
        console.log("Exception caught by catch in SharePoint provider", error);
        throw error;
      }
    } 
  }
}
