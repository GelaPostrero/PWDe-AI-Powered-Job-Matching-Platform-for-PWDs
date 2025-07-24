-- CreateEnum
CREATE TYPE "Disability_Severity" AS ENUM ('Mild', 'Moderate', 'Severe');

-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('Male', 'Female', 'Other');

-- CreateTable
CREATE TABLE "Pwd_Profile" (
    "pwd_Id" SERIAL NOT NULL,
    "user_Id" INTEGER NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "middle_name" TEXT NOT NULL,
    "profile_picture" TEXT NOT NULL,
    "bio" TEXT NOT NULL,
    "disability_Type" TEXT NOT NULL,
    "disability_severity" "Disability_Severity" NOT NULL,
    "accessibility_Needs" TEXT NOT NULL,
    "location_City" TEXT NOT NULL,
    "location_Province" TEXT NOT NULL,
    "location_Country" TEXT NOT NULL,
    "date_of_birth" TEXT NOT NULL,
    "gender" "Gender" NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Pwd_Profile_pkey" PRIMARY KEY ("pwd_Id")
);

-- CreateTable
CREATE TABLE "Employer_Profile" (
    "employer_Id" SERIAL NOT NULL,
    "user_Id" INTEGER NOT NULL,
    "company_name" TEXT NOT NULL,
    "company_logo" TEXT NOT NULL,
    "company_description" TEXT NOT NULL,
    "accessibility_features" TEXT NOT NULL,
    "industry" TEXT NOT NULL,
    "location_City" TEXT NOT NULL,
    "location_Province" TEXT NOT NULL,
    "location_Country" TEXT NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Employer_Profile_pkey" PRIMARY KEY ("employer_Id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Pwd_Profile_user_Id_key" ON "Pwd_Profile"("user_Id");

-- CreateIndex
CREATE UNIQUE INDEX "Employer_Profile_user_Id_key" ON "Employer_Profile"("user_Id");

-- AddForeignKey
ALTER TABLE "Pwd_Profile" ADD CONSTRAINT "Pwd_Profile_user_Id_fkey" FOREIGN KEY ("user_Id") REFERENCES "Users"("user_Id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Employer_Profile" ADD CONSTRAINT "Employer_Profile_user_Id_fkey" FOREIGN KEY ("user_Id") REFERENCES "Users"("user_Id") ON DELETE CASCADE ON UPDATE CASCADE;
