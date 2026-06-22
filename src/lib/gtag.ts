type GoogleEventParams = {
  ctaName?: string;
  ctaLocation?: string;
  ctaText?: string;
};

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackGoogleEvent(eventName: string, params: GoogleEventParams = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", eventName, {
    cta_name: params.ctaName,
    cta_location: params.ctaLocation,
    link_text: params.ctaText,
  });
}

export function trackCtaClick(ctaName: string, ctaLocation: string, ctaText: string) {
  trackGoogleEvent("cta_click", {
    ctaName,
    ctaLocation,
    ctaText,
  });
}
