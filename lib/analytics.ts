/**
 * Privacy-respecting analytics helpers.
 * Tracks only high-level navigational and interaction events.
 * Never collects PII, phone numbers, message contents, or private parameters.
 */

export type AnalyticsEvent =
  | { type: "case_study_open"; slug: string }
  | { type: "pathway_select"; category: "product" | "strategy" | "analytics" }
  | { type: "contact_click"; channel: "email" | "copy_email" | "cv_request" }
  | { type: "cv_click"; track: string }
  | { type: "external_github_click" };

export function trackEvent(event: AnalyticsEvent) {
  if (typeof window === "undefined") return;

  // If Plausible, Fathom, or custom provider is present:
  const win = window as unknown as {
    plausible?: (eventName: string, options?: { props?: Record<string, string> }) => void;
  };

  if (typeof win.plausible === "function") {
    switch (event.type) {
      case "case_study_open":
        win.plausible("Case Study Open", { props: { slug: event.slug } });
        break;
      case "pathway_select":
        win.plausible("Pathway Select", { props: { category: event.category } });
        break;
      case "contact_click":
        win.plausible("Contact Action", { props: { channel: event.channel } });
        break;
      case "cv_click":
        win.plausible("CV Request Click", { props: { track: event.track } });
        break;
      case "external_github_click":
        win.plausible("External GitHub Click");
        break;
    }
  }

  // Development logging
  if (process.env.NODE_ENV === "development") {
    console.debug("[Analytics Event]", event);
  }
}
