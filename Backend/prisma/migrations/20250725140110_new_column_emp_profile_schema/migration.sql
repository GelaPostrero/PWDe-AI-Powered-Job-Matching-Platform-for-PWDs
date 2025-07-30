/*
  Warnings:

  - You are about to drop the column `accessibility_features` on the `Employer_Profile` table. All the data in the column will be lost.
  - You are about to drop the column `company_description` on the `Employer_Profile` table. All the data in the column will be lost.
  - You are about to drop the column `company_logo` on the `Employer_Profile` table. All the data in the column will be lost.
  - You are about to drop the column `company_name` on the `Employer_Profile` table. All the data in the column will be lost.
  - You are about to drop the column `industry` on the `Employer_Profile` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Employer_Profile" DROP COLUMN "accessibility_features",
DROP COLUMN "company_description",
DROP COLUMN "company_logo",
DROP COLUMN "company_name",
DROP COLUMN "industry",
ADD COLUMN     "LinkedIn_profile" TEXT,
ADD COLUMN     "Other_Social_Media" TEXT,
ADD COLUMN     "company_website" TEXT,
ADD COLUMN     "contact_person_fullname" TEXT,
ADD COLUMN     "contact_person_job_title" TEXT,
ADD COLUMN     "contact_person_phone_number" TEXT,
ALTER COLUMN "profile_picture" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Pwd_Profile" ADD COLUMN     "pwd_document" TEXT;
