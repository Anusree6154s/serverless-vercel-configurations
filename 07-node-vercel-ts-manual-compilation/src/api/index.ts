import express, { Application } from "express";
import router from "../routes";

const app: Application = express();

app.use(router);

export const config = { maxDuration: 30 };

export default app;
