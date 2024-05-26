import env from "dotenv";
import { Application } from "express";
import express, { urlencoded } from "express";
import passport from "passport";
import session from "express-session";

env.config();

export const PORT = process.env.PORT;
export const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID || "";
export const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET || "";
export const COOKIE_SECRET_KEY = process.env.COOKIE_SECRET_KEY || "";
export const CLIENT_URI = process.env.CLIENT_URI;

export const settupMiddlewares = (app: Application) => {
  app.use(express.json());
  app.use(urlencoded({ extended: true }));
  app.use(
    session({
      secret: COOKIE_SECRET_KEY,
      resave: false,
      saveUninitialized: true,
      cookie: { secure: false, maxAge: 60 * 1000 }, //1m
      name: "my-passport-session",
    })
  );
  app.use(passport.initialize());
  app.use(passport.session());
};
