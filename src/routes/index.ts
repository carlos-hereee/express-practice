import type { Request, Express, Response } from "express";
// import authRoute from "./auth/index.js";
// import appRoute from "./app/index.js";
// // import calendarRoute from "./calendar";
// import storeRoute from "./store/index.js";
import { port } from "@utils/app/config.js";

export default (app: Express) => {
  // initial test route
  app.get("/", (_req: Request, res: Response) => {
    res.status(200).json(`api is running on ${port}`).end();
  });
};
//   // authentication route for login and access/refresh tokens
//   app.use("/auth/", authRoute);
//   // app data
//   app.use("/app/", appRoute);
// // assets route
// import publicRoute  from "./public";
// app.use("/public", publicRoute);
