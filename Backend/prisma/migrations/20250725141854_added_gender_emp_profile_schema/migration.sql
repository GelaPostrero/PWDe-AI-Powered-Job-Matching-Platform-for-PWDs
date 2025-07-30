/*
  Warnings:

  - Added the required column `gender` to the `Employer_Profile` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Employer_Profile" ADD COLUMN     "gender" "Gender" NOT NULL;
