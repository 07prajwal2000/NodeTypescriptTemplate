import express from "express";
import initializeApplication from "./init";
import { logInfo } from "./lib/logger";

initializeApplication();
const port = process.env.PORT || 3000;

const app = express();

app.listen(port, () => {
  logInfo(`Server listening on http://localhost:${port}`);
});