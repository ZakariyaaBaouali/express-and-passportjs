import { Router, Request, Response } from "express";
import passport, { use } from "passport";
import { CLIENT_URI } from "../config";

const route = Router();

route.get("/login/failed", (req: Request, res: Response) => {
  return res.status(401).send({
    success: false,
    message: "Failed to login with google",
  });
});

route.get("/login/success", (req: Request, res: Response) => {
  let user = null;
  if (req.user) user = req.user;
  return res.status(200).send({
    success: true,
    user,
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
    successRedirect: CLIENT_URI,
    failureRedirect: "/login/failed",
  })
);

export default route;
