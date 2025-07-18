import { StreamChat } from "stream-chat";
import "dotenv/config";

const apikey = process.env.STREAM_API_KEY;
const apiSecret = process.env.STREAM_API_SECRET;

if (!apikey || !apiSecret) {
  console.error("Stream API key or Secret is missing");
}

const streamClient = StreamChat.getInstance(apikey, apiSecret);

//! create user
export const upsertStreamUser = async (userData) => {
  try {
    await streamClient.upsertUsers([userData]);
    return userData;
  } catch (error) {
    console.error("Error creating upserting Stream user:", error);
  }
};

// todo: later

export const generateStreamToken = (userId) => {};
