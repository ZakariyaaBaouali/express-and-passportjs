import express, { Request, Response } from "express";
import { initializePassport } from "./passport";
import authController from "./controllers/auth.controller";
import { PORT, settupMiddlewares } from "./config";

const app = express();

settupMiddlewares(app);
initializePassport();
app.use("/auth", authController);

app.get("/health-check", (req: Request, res: Response) => {
  return res.status(200).send(`Server working`);
});

app.listen(PORT, () =>
  console.log(`Server running successfully on port ${PORT} 🚀🚀🚀`)
);
