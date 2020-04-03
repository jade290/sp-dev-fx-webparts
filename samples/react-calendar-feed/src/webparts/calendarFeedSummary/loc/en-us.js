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
    SeeAllLinkText: "See All",
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
    LayoutSettingsGroupName: "Layout Settings"
  }
});
