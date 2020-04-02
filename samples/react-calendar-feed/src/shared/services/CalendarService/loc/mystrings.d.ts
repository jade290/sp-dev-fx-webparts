declare interface ICalendarServicesStrings {
  SharePointProviderName: string;
  ApiProviderName: string;
  WordPressProviderName: string;
  ExchangeProviderName: string;
  iCalProviderName: string;
  RSSProviderName: string;
  MockProviderName: string;
}

declare module 'CalendarServicesStrings' {
  const strings: ICalendarServicesStrings;
  export = strings;
}
