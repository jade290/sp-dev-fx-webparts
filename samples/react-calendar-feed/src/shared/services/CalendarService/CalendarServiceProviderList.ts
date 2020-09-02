import { MockCalendarService } from "./MockCalendarService";
import { ApiCalendarService } from "./ApiCalendarService";

// Localization
import * as strings from "CalendarServicesStrings";

export enum CalendarServiceProviderType {
  API = "API",
  Mock = "Mock"
}

export class CalendarServiceProviderList {
  public static getProviders(): any[] {
    const providers: any[] = [
      {
        label: strings.ApiProviderName,
        key: CalendarServiceProviderType.API,
        initialize: () => new ApiCalendarService()
      },
    ];

    // only include the Mock service provider in DEBUG
    if (DEBUG) {
      providers.push({
        label: strings.MockProviderName,
        key: CalendarServiceProviderType.Mock,
        initialize: () => new MockCalendarService()
      });
    }

    return providers;
  }
}

