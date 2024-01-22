import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class User1705782583289 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "user",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          { name: "firstName", type: "varchar" },
          { name: "lastName", type: "varchar" },
          { name: "email", type: "varchar", isUnique: true },
          { name: "password", type: "varchar" },
        ],
      }),
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("user");
  }
}

// import { MigrationInterface, QueryRunner, Table } from "typeorm";

// export class User1705782583289 implements MigrationInterface {
//   public async up(queryRunner: QueryRunner): Promise<void> {
//     await queryRunner.createTable(
//       new Table({
//         name: "user",
//         columns: [
//           {
//             name: "id",
//             type: "int",
//             isPrimary: true,
//             isGenerated: true,
//             generationStrategy: "increment",
//           },
//           { name: "firstName", type: "varchar" },
//           { name: "lastName", type: "varchar" },
//           { name: "email", type: "varchar", isUnique: true },
//           { name: "password", type: "varchar" },
//           { name: "oauthProvider", type: "varchar", isNullable: true }, // For OAuth integration
//           { name: "oauthId", type: "varchar", isNullable: true }, // For OAuth integration
//           { name: "status", type: "varchar", default: "'active'" }, // Account status
//           { name: "createdAt", type: "timestamp", default: "CURRENT_TIMESTAMP" },
//           { name: "updatedAt", type: "timestamp", default: "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" },
//           { name: "refreshToken", type: "varchar", isNullable: true }, // For JWT refresh token
//           { name: "resetToken", type: "varchar", isNullable: true }, // For password reset
//           { name: "resetTokenExpiry", type: "timestamp", isNullable: true }, // Expiry of reset token
//         ],
//       }),
//       true
//     );
//   }
// }
