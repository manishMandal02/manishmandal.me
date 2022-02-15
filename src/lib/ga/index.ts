declare global {
  interface Window {
    gtag: any;
  }
}

// log the page views with their URL
export const pageView = (url) => {
  window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
    page_path: url,
  });
};

// log specific events happening.
export const gaEvent = ({ action, params }) => {
  window.gtag('event', action, params);
};
