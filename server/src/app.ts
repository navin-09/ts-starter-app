// app.ts
import express from "express";
import cors from "cors";
import routes from "./routes";
import "reflect-metadata";
import dotenv from "dotenv";
dotenv.config();
import connection from "./database/config/db";

const app = express();
// Use express middleware
app.use(express.json(), express.urlencoded({ extended: true }), cors());

app.use("/api", routes);
// Use the database connection
connection
  .initialize()
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });

export default app;
