import express, { urlencoded } from "express";
import env from "dotenv";
import cookie from "cookie-session";
import { COOKIE_SECRET_KEY, PORT } from "./config";
import passport from "passport";

const app = express();
env.config();

app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(
  cookie({
    maxAge: 24 * 60 * 60 * 1000,
    name: "my-session",
    keys: [COOKIE_SECRET_KEY],
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.listen(PORT, () =>
  console.log(`Server running successfully on port ${PORT} 🚀🚀🚀`)
);
