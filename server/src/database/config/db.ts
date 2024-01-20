import { createConnection, ConnectionOptions } from "typeorm";

const connectionOptions: ConnectionOptions = {
  type: "postgres", // Specify the correct database type
  url: "postgresql://navin:szqBJ_OqrDRA-PIohoYCEg@waving-tapir-7654.8nk.gcp-asia-southeast1.cockroachlabs.cloud:26257/starter_app?sslmode=verify-full",
  entities: ["src/database/models/*.ts"],
  migrations: ["src/database/migrations/*.ts"],
  subscribers: ["src/database/subscribers/*.ts"],
  synchronize: false, // Set to false in production
  logging: true,
};

const connection = createConnection(connectionOptions);

export default connection;
