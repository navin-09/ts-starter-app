// app.ts
import express from "express";
import cors from "cors";
import routes from "./routes";
import connection from "./database/config/db";

const app = express();
// Use express middleware
app.use(express.json(), express.urlencoded({ extended: true }), cors());

app.use("/", routes);
// Use the database connection
connection
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });

export default app;
