import { DataSource } from "typeorm";
import dotenv from "dotenv";
dotenv.config();

const connection = new DataSource({
  type: "postgres", // Specify the correct database type
  url: process.env.DB_URL,
  entities: ["src/database/models/*.ts"],
  migrations: ["src/database/migrations/*.ts"],
  subscribers: ["src/database/subscribers/*.ts"],
  synchronize: false, // Set to false in production
  logging: true,
});

// const connection = createConnection(connectionOptions);

export default connection;
