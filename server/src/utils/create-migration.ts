const { exec } = require("child_process");

// Get command line arguments
const args = process.argv.slice(2);
console.log(args);
// Find the migration name
const migrationNameIndex = args.indexOf("-n");
const migrationName = `src/database/migrations/${args[0]}`;
console.log({ migrationName });
if (!migrationName) {
  console.error("Error: Missing migration name (-n) argument");
  process.exit(1);
}
// Run npm script with the migration name
try {
  exec(`npx typeorm  migration:create ${migrationName}`);
  console.log("Migration created");
} catch (error) {
  console.error(error);
  process.exit(1);
}
