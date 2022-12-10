import Pusher from "pusher";
import ClientPusher from "pusher-js";

export const serverPusher = new Pusher({
  appId: process.env.PUSHER_APP_ID!,
  key: process.env.PUSHER_APP_KEY!,
  secret: process.env.PUSHER_APP_SECRET!,
  cluster: "eu",
  useTLS: true,
});

export const clientPusher = new ClientPusher(process.env.PUSHER_APP_KEY!, {
  cluster: "eu",
  forceTLS: true,
});
