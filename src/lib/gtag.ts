type GoogleEventParams = {
  category?: string;
  label?: string;
  ctaLocation?: string;
  ctaText?: string;
};

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackGoogleEvent(action: string, params: GoogleEventParams = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", action, {
    event_category: params.category ?? "cta",
    event_label: params.label,
    cta_location: params.ctaLocation,
    cta_text: params.ctaText,
  });
}

export function trackCtaClick(action: string, ctaLocation: string, ctaText: string) {
  trackGoogleEvent(action, {
    label: `${ctaLocation}: ${ctaText}`,
    ctaLocation,
    ctaText,
  });
}
