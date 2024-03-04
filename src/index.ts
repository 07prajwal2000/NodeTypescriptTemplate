import express from "express";
import initializeApplication from "./init";

initializeApplication();
const port = process.env.PORT || 3000;

const app = express();

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});