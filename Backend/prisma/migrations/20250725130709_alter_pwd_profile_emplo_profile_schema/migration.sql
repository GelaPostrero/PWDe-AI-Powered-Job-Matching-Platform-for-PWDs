/*
  Warnings:

  - You are about to drop the column `location_City` on the `Employer_Profile` table. All the data in the column will be lost.
  - You are about to drop the column `location_Country` on the `Employer_Profile` table. All the data in the column will be lost.
  - You are about to drop the column `location_Province` on the `Employer_Profile` table. All the data in the column will be lost.
  - You are about to drop the column `location_City` on the `Pwd_Profile` table. All the data in the column will be lost.
  - You are about to drop the column `location_Country` on the `Pwd_Profile` table. All the data in the column will be lost.
  - You are about to drop the column `location_Province` on the `Pwd_Profile` table. All the data in the column will be lost.
  - Added the required column `address` to the `Employer_Profile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `first_name` to the `Employer_Profile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `last_name` to the `Employer_Profile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `middle_name` to the `Employer_Profile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profile_picture` to the `Employer_Profile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `address` to the `Pwd_Profile` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Employer_Profile" DROP COLUMN "location_City",
DROP COLUMN "location_Country",
DROP COLUMN "location_Province",
ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "first_name" TEXT NOT NULL,
ADD COLUMN     "last_name" TEXT NOT NULL,
ADD COLUMN     "middle_name" TEXT NOT NULL,
ADD COLUMN     "profile_picture" TEXT NOT NULL,
ALTER COLUMN "created_at" DROP DEFAULT,
ALTER COLUMN "created_at" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Pwd_Profile" DROP COLUMN "location_City",
DROP COLUMN "location_Country",
DROP COLUMN "location_Province",
ADD COLUMN     "address" TEXT NOT NULL,
ALTER COLUMN "created_at" DROP DEFAULT,
ALTER COLUMN "created_at" SET DATA TYPE TEXT;
