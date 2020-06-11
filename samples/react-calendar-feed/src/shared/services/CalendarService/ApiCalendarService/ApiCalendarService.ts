/**
 * ExtensionService
 */

import '@pnp/polyfill-ie11';
import { HttpClient, IHttpClientOptions, HttpClientResponse } from "@microsoft/sp-http";
import { ICalendarService } from "..";
import { BaseCalendarService } from "../BaseCalendarService";
import { ICalendarEvent } from "../ICalendarEvent";
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

  protected fetchJsonResponse(feedUrl: string) : Promise<HttpClientResponse> {
    console.log("API Service fetchJsonResponse method called.");
    console.log("FeedUrl: "+ feedUrl);
    const postURL = strings.Site +"_api/web/lists/GetByTitle('"+ strings.ListName  +"')/items";
    console.log("About to make REST API request.");
    const requestHeaders: Headers = new Headers();
    requestHeaders.append('Accept', 'application/json;odata=verbose');
    const httpClientOptions: IHttpClientOptions = { headers: requestHeaders};
    return this.Context.httpClient.get(
      postURL,
      HttpClient.configurations.v1, httpClientOptions)
      .then((response) => {
        console.log("REST API response received.");
        console.log(response.json);
        return response.json();
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
      // Open the web associated to the site
      //let web = new Web(siteUrl);

      try {
        // Once we get the list, convert to calendar events
        let events: ICalendarEvent[] = data2.d.results.map((item: any) => {
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

        if(strings.Site.includes("guidewell")) {
          events = events.filter((item: any) =>
          item.category == "Show on Homepage");
        }

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