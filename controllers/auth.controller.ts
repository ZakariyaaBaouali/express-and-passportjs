import { Router, Request, Response } from "express";
import passport from "passport";
import { CLIENT_URI } from "../config";

const route = Router();

route.get("/login/failed", (req: Request, res: Response) => {
  console.log({
    success: false,
    message: "Failed to login with google",
  });
  return res.status(401).redirect(`${CLIENT_URI}/auth/failed`);
});

route.get("/login/success", (req: Request, res: Response) => {
  let user = null;
  if (req.user) user = req.user;
  return res.status(200).send({
    success: true,
    user: user,
    cookies: req.cookies,
  });
});

route.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

route.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/auth/login/failed",
  }),
  (req: Request, res: Response) => {
    console.log("Google was here 🚀🚀" + req.user);
    const CLIENT_SUCCESS_PATH = `${CLIENT_URI}/auth/success`;
    console.log(CLIENT_SUCCESS_PATH);
    return res.status(200).redirect(CLIENT_SUCCESS_PATH);
  }
);

export default route;
