import env from "dotenv";
env.config();

export const PORT = process.env.PORT;
export const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID || "";
export const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET || "";
export const COOKIE_SECRET_KEY = process.env.COOKIE_SECRET_KEY || "";
export const CLIENT_URI = process.env.CLIENT_URI;
