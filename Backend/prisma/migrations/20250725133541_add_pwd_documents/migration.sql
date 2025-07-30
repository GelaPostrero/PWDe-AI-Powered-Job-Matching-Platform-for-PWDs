-- AlterTable
ALTER TABLE "Pwd_Profile" ALTER COLUMN "profile_picture" DROP NOT NULL,
ALTER COLUMN "bio" DROP NOT NULL,
ALTER COLUMN "disability_Type" DROP NOT NULL,
ALTER COLUMN "disability_severity" DROP NOT NULL,
ALTER COLUMN "accessibility_Needs" DROP NOT NULL,
ALTER COLUMN "rating" DROP NOT NULL,
ALTER COLUMN "updated_at" DROP NOT NULL;

-- CreateTable
CREATE TABLE "Pwd_Document" (
    "document_id" SERIAL NOT NULL,
    "pwd_id" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "file_path" TEXT NOT NULL,
    "uploaded_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Pwd_Document_pkey" PRIMARY KEY ("document_id")
);

-- AddForeignKey
ALTER TABLE "Pwd_Document" ADD CONSTRAINT "Pwd_Document_pwd_id_fkey" FOREIGN KEY ("pwd_id") REFERENCES "Pwd_Profile"("pwd_id") ON DELETE CASCADE ON UPDATE CASCADE;
