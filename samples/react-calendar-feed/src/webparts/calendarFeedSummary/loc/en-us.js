define([], function() {
  return {
    UseCorsFieldDescription: "If you get a message saying \"Failed to fetch the feed URL you specified.\", try enabling the \"Use proxy\" option.",
    ConvertFromUTCFieldDescription: "If your feed returns Universal Time Coordinated (UTC) events and your events appear at the wrong time zone, try enabling \"Convert from UTC\".",
    ConvertFromUTCOptionNo: "Do not convert",
    ConvertFromUTCOptionYes: "Convert",
    ConvertFromUTCLabel: "Convert from UTC",
    MaxTotalFieldDescription: "Indicates the total number of events to load. Use 0 for no maximum.",
    MaxTotalFieldLabel: "Maximum number of events",
    FilmStripAriaLabel: "Events list. Use left and right arrow keys to move between events. Press enter to go to the selected event.",
    PropertyPaneDescription: "Select the type of feed you wish to connect to and the feed URL.",
    AllItemsUrlFieldLabel: "View all events URL",
    FeedUrlFieldLabel: "Feed URL",
    siteEventListsDdlLabel: "Events list",
    FeedTypeFieldLabel: "Feed type",
    PlaceholderTitle: "Configure event feed",
    PlaceholderDescription: "To display a summary of events, you need to select a feed type and configure the event feed URL.",
    ConfigureButton: "Configure",
    FeedTypeOptionGoogle: "Google Calendar",
    FeedTypeOptioniCal: "iCal",
    FeedTypeOptionRSS: "RSS Calendar",
    FeedTypeOptionWordPress: "WordPress WP_FullCalendar",
    FeedUrlCallout: "If your feed supports date range parameters, use {s} and {e} for start and end dates, and we'll replace them with date values.",
    MaxEventsFieldLabel: "Narrow page length",
    MaxEventsFieldDescription: "Indicates the number of events to show per page when displaying a narrow list. Use 0 for no maximum",
    DateRangeFieldLabel: "Date range",
    DateRangeOptionUpcoming: "Next year",
    DateRangeOptionWeek: "Next week",
    DateRangeOptionTwoWeeks: "Next two weeks",
    DateRangeOptionMonth: "Next month",
    DateRangeOptionQuarter: "Next quarter",
    UseCORSFieldLabel: "Use proxy",
    HideShowPreviousNextButtonsLabel: "Hide or Show Navigation",
    HideShowSeeAllLinkLabel: "Hide or Show 'See All' Link",
    SeeAllLinkText: "See All Events",
    UseCORSFieldCallout: "Enable this option if you get a CORS message",
    UseCORSFieldCalloutDisabled: "This option is disabled when using the Mock provider",
    CORSOn: "On",
    CORSOff: "Off",
    AdvancedGroupName: "Advanced",
    FocusZoneAriaLabelReadMode: "Events list. Use up and down arrow keys to move between events. Press enter to obtain details on a selected event.",
    FocusZoneAriaLabelEditMode: "Events list. Use up and down arrow keys to move between events.",
    EventCardWrapperArialLabel: "Event {0}. Start on {1}.",
    Loading: "Please wait...",
    NoEventsMessage: "There aren't any upcoming events.",
    CacheDurationFieldLabel: "Cache duration (minutes)",
    CacheDurationFieldCallout: "Use 0 if you do not want to cache events. Maximum value is 1 day (14,400 minutes).",
    FeedUrlValidationNoUrl: "Provide a URL",
    FeedUrlValidationInvalidFormat: "URL is not a valid format. Please use a URL that starts with http:// or https://. ",
    ErrorMessage: "Oops, something went wrong! We can't display your events at the moment. Please try again later.",
    NextButtonLabel: "Next",
    PrevButtonLabel: "Previous",
    NextButtonAriaLabel: "Go to the Next page",
    PrevButtonAriaLabel: "Go to the Previous page",
    ErrorNotFound:"The feed URL you specified cannot be found. Make sure that you have the right URL and try again.",
    ErrorMixedContent: "Failed to fetch the feed URL you specified. Try using an https:// URL, or enable the \"Use proxy\" option",
    ErrorFailedToFetch: "Failed to fetch the feed URL you specified. This may be due to an invalid URL.",
    ErrorFailedToFetchNoProxy: "Failed to fetch the feed URL you specified. This may be due to an invalid URL or a CORS issue. Verify the URL, or enable the \"Use proxy\" option.",
    ErrorRssNoResult:"The feed you specified does not appear to be a RSS feed",
    ErrorRssNoRoot: "The RSS feed you specified appear to be invalid: it does not have a root",
    ErrorRssNoChannel: "The RSS feed you specified appear to be invalid: it does not have a channel",
    ErrorInvalidiCalFeed: "The URL you provided does not appear to be an iCal feed. Are you sure you selected the right feed type?",
    ErrorInvalidWordPressFeed: "The URL you provided does not appear to be a WordPress feed. Are you sure you selected the right feed type?",
    AddToCalendarAriaLabel: "Press enter to download the calendar file to your device.",
    AddToCalendarButtonLabel: "Add to my calendar",
    AllDayDateFormat: "dddd, MMMM Do YYYY",
    LocalizedTimeFormat: "llll",
    FeedSettingsGroupName: "Calendar feed",
    LayoutSettingsGroupName: "Layout Settings",
    ApplicationPrincipalId: "00000003-0000-0ff1-ce00-000000000000",
    Site: "https://guidewell.sharepoint.com/sites/GWNews/",
    ShortSite: "guidewell.sharepoint.com",
    //ClientId: "6a2154af-6531-4528-978b-6bb06902c838",
    //ClientSecret: "cZcE01DKq2dDibj3iel4tOUNsC7+y9FvwFM0D18Iezw=",
    //TenantId: "23d0b6b0-36e1-4c9d-98fa-9c2366c8cfe5",
    //Token: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IllNRUxIVDBndmIwbXhvU0RvWWZvbWpxZmpZVSIsImtpZCI6IllNRUxIVDBndmIwbXhvU0RvWWZvbWpxZmpZVSJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvYXZvcmF0ZWNoLnNoYXJlcG9pbnQuY29tQDIzZDBiNmIwLTM2ZTEtNGM5ZC05OGZhLTljMjM2NmM4Y2ZlNSIsImlzcyI6IjAwMDAwMDAxLTAwMDAtMDAwMC1jMDAwLTAwMDAwMDAwMDAwMEAyM2QwYjZiMC0zNmUxLTRjOWQtOThmYS05YzIzNjZjOGNmZTUiLCJpYXQiOjE1ODY4MDM2NDMsIm5iZiI6MTU4NjgwMzY0MywiZXhwIjoxNTg2ODkwMzQzLCJpZGVudGl0eXByb3ZpZGVyIjoiMDAwMDAwMDEtMDAwMC0wMDAwLWMwMDAtMDAwMDAwMDAwMDAwQDIzZDBiNmIwLTM2ZTEtNGM5ZC05OGZhLTljMjM2NmM4Y2ZlNSIsIm5hbWVpZCI6IjZhMjE1NGFmLTY1MzEtNDUyOC05NzhiLTZiYjA2OTAyYzgzOEAyM2QwYjZiMC0zNmUxLTRjOWQtOThmYS05YzIzNjZjOGNmZTUiLCJvaWQiOiI0NDNhZjRmZC0yOTMyLTQzZDItOGVjNS1mZDA3ZWZlODZlZDIiLCJzdWIiOiI0NDNhZjRmZC0yOTMyLTQzZDItOGVjNS1mZDA3ZWZlODZlZDIiLCJ0cnVzdGVkZm9yZGVsZWdhdGlvbiI6ImZhbHNlIn0.j5MCrnpOugrewiplulLH6TasPmLl07LiwL1I9orT5E19fksX6k1KgUFP9EHFhg6uAfdujpLMdCGMBwwRlevidGC5DlvKnzycCqjBAIq6CVWINmHtp4tc-6gBfIb69DZbvWr_6KLHPXXim4NgsUZHwBxeP7Gy7CEUecfp7IQpcGSTOKWDHNWt4tGNpZ5u0yHXlEVzHKf3YoO9PE-3hbkx1k-BCHmgjmSFJOSQQUH-9v3SyNTRjGSag5LbrmOATrdByb2L4L-KXEg6q-MvGMyIlFtlGhhP4qJGSaO0aZIBJxDWRAGgaewzcXisiQo5FucewL6XYrjQAKkmNGMNuEmXsA",
    //ListName: "SharePoint%20Calendar"
    //ShortSite: "avoratech.sharepoint.com",
    ClientId: "590f19d2-6e1a-4c56-a0c2-b2ffb79b171e@302133cf-8a53-44e8-8b23-d00e5f33fe7c",
    ClientSecret: "Xnlyg16p3SkTRZ/1XfcCkPsZ104beeP/Wv8uZzNqyy0=",
    TenantId: "302133cf-8a53-44e8-8b23-d00e5f33fe7c",
    Token: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IllNRUxIVDBndmIwbXhvU0RvWWZvbWpxZmpZVSIsImtpZCI6IllNRUxIVDBndmIwbXhvU0RvWWZvbWpxZmpZVSJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvZ3VpZGV3ZWxsLnNoYXJlcG9pbnQuY29tQDMwMjEzM2NmLThhNTMtNDRlOC04YjIzLWQwMGU1ZjMzZmU3YyIsImlzcyI6IjAwMDAwMDAxLTAwMDAtMDAwMC1jMDAwLTAwMDAwMDAwMDAwMEAzMDIxMzNjZi04YTUzLTQ0ZTgtOGIyMy1kMDBlNWYzM2ZlN2MiLCJpYXQiOjE1ODc0OTE0ODYsIm5iZiI6MTU4NzQ5MTQ4NiwiZXhwIjoxNTg3NTc4MTg2LCJpZGVudGl0eXByb3ZpZGVyIjoiMDAwMDAwMDEtMDAwMC0wMDAwLWMwMDAtMDAwMDAwMDAwMDAwQDMwMjEzM2NmLThhNTMtNDRlOC04YjIzLWQwMGU1ZjMzZmU3YyIsIm5hbWVpZCI6IjU5MGYxOWQyLTZlMWEtNGM1Ni1hMGMyLWIyZmZiNzliMTcxZUAzMDIxMzNjZi04YTUzLTQ0ZTgtOGIyMy1kMDBlNWYzM2ZlN2MiLCJvaWQiOiI0MjY0OTMwMC1mODRiLTQyNWMtOGEwNi0yYTc0MjkyYmMzYjAiLCJzdWIiOiI0MjY0OTMwMC1mODRiLTQyNWMtOGEwNi0yYTc0MjkyYmMzYjAiLCJ0cnVzdGVkZm9yZGVsZWdhdGlvbiI6ImZhbHNlIn0.JwXKU9CuW6AQVgkORcVpmW7grl7JZxNbJbSEZ_9ins3PH75JKDWj-BxXewkJckFefvX0Hta4Pf_Sf1Ha1xpu6gMDfSGSWKwWWtjg1SxbQZO18LfplF3Gna_FkKZFfmkV3DG9LXJp0RO4ayMtVeclIgqqDczDBGBlVgGWVN8xn2IrAFyTXVWKXJJhTKlrovmc2cguHPJS0kEC_s0NOdsQo1Z_jH2ol4Yio2Y1u_uXUW3I66svyP5-L6PS63G-idoEKIpdVf10r5ZbSUwd2vnobvMD5A1e8GtGuW7dDb4zujOekvCMq7ehUPUf1iNinJSBUKC7DnfFnPbZCm4j4BzQzw",
    ListName: "Events"
  }
});
