-- CreateEnum
CREATE TYPE "UserType" AS ENUM ('PWD', 'Empoyer', 'Administrator');

-- CreateTable
CREATE TABLE "Users" (
    "user_Id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password_hash" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "user_type" "UserType" NOT NULL,
    "account_status" TEXT NOT NULL,
    "is_verified" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("user_Id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Users_phone_number_key" ON "Users"("phone_number");
