import winston from "winston";

const myFormat = winston.format.printf(({ level, message, timestamp }) => {
  return `${timestamp} - ${level}: ${message}`;
});

export default function initLogger() {
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
  console.log = (...data: any[]) => logger.info(data.join(" "));
  console.warn = (...data: any[]) => logger.warn(data.join(" "));
  console.error = (...data: any[]) => logger.error(data.join(" "));
}