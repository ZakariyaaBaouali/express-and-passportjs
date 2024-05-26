import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from "../config";
import { Strategy as LocalStrategy } from "passport-local";

export const initializePassport = () => {
  //google
  passport.use(
    new GoogleStrategy(
      {
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:8080/auth/google/callback",
      },
      (accessToken, refreshToken, profile, done) => {
        console.log(accessToken);
        console.log(refreshToken);
        console.log(profile);
        done(null, profile);
      }
    )
  );

  //email - passport
  passport.use(
    new LocalStrategy(
      {
        usernameField: "email",
      },
      (username, password, done) => {
        console.log(`Email : ${username} 🚀🚀`);
        console.log(`Password : ${password} 🚀🚀`);
        done(null, { email: username, password });
      }
    )
  );

  //jwt

  passport.serializeUser((user, done) => {
    console.log("inside user serialize");
    done(null, user);
  });

  passport.deserializeUser((id, done) => {
    console.log("inside user deserialize");
    const user = { id };
    done(null, user);
  });
};
