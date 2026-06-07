// Analytics helper — GA4
// Define and track custom conversion events from anywhere in the app.

type EventName =
  | "page_view"
  | "view_form"
  | "begin_checkout"
  | "unlock_button_click"
  | "sign_up"
  | "generate_lead"
  | "click_download"
  | "share";

type EventParams = Record<string, string | number | boolean>;

declare global {
  interface Window {
    gtag: (
      command: "event",
      action: EventName | string,
      params?: EventParams
    ) => void;
    dataLayer: unknown[];
  }
}

export function trackEvent(event: EventName, params?: EventParams): void {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", event, params ?? {});
  }
}

export function trackPageView(title?: string): void {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "page_view", {
      page_title: title || document.title,
      page_location: window.location.href,
    });
  }
}
