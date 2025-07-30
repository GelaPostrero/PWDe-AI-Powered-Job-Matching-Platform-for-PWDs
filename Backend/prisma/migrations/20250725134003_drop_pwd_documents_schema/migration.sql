/*
  Warnings:

  - You are about to drop the `Pwd_Document` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Pwd_Document" DROP CONSTRAINT "Pwd_Document_pwd_id_fkey";

-- DropTable
DROP TABLE "Pwd_Document";
