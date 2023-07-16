import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const appId = "f87cb36833754814b47dbef7873cfc5d";
const token =
  "007eJxTYLhjNuGfx0F1R92H/VVxDw/I8rimPws/l3Wa28h6v7+Tl48CQ5qFeXKSsZmFsbG5qYmFoUmSiXlKUmqauYW5cXJasmlKxcfNKQ2BjAzCtzaxMDJAIIjPwpCbmJnHwAAAHjYfKQ==";

//some encode algorithms
export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "main";
