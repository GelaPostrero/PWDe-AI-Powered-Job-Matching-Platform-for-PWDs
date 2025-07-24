/*
  Warnings:

  - The `account_status` column on the `Users` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "AccountStatus" AS ENUM ('Active', 'Inactive', 'Suspended', 'Deleted');

-- AlterTable
ALTER TABLE "Users" DROP COLUMN "account_status",
ADD COLUMN     "account_status" "AccountStatus" NOT NULL DEFAULT 'Inactive';
