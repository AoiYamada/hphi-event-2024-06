import { messagingApi, ClientConfig } from "@line/bot-sdk";
import HttpAgent, { HttpsAgent } from "agentkeepalive";

const { MessagingApiClient } = messagingApi;

const config: ClientConfig = {
  channelAccessToken: process.env.LINE_CHANNEL_ACCESS_TOKEN ?? "",
  httpConfig: {
    httpAgent: new HttpAgent(),
    httpsAgent: new HttpsAgent(),
  },
};

declare global {
  // eslint-disable-next-line no-var
  var cachedLineBot: messagingApi.MessagingApiClient;
}

let lineBot: messagingApi.MessagingApiClient;
if (process.env.NODE_ENV === "production") {
  lineBot = new MessagingApiClient(config);
} else {
  if (!global.cachedLineBot) {
    global.cachedLineBot = new MessagingApiClient(config);
  }
  lineBot = global.cachedLineBot;
}

export { lineBot };
