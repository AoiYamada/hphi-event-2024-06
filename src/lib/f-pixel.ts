// Copied from: https://github.dev/vercel/next.js/tree/canary/examples/with-facebook-pixel

export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;

export const view = () => {
  // https://www.facebook.com/business/help/402791146561655?id=1205376682832142
  window.fbq("track", "ViewContent");
};

// https://developers.facebook.com/docs/facebook-pixel/advanced/
export const event = (name: string, options = {}) => {
  window.fbq("track", name, options);
};