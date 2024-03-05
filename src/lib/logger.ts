import winston from "winston";

const myFormat = winston.format.printf(({ level, message, timestamp }) => {
  return `${timestamp} - ${level}: ${message}`;
});

const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp(),
    myFormat,
  ),
  transports: [
    new winston.transports.Console(),
  ]
});

export const logInfo = logger.info;
export const logWarning = logger.warn;
export const logError = logger.error;