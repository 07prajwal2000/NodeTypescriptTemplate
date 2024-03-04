import { config } from "dotenv";
import initLogger from "./lib/logger";

export default function initializeApplication() {
  config();
  initLogger();
}