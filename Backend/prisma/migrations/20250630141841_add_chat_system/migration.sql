-- CreateTable
CREATE TABLE "Chat_Thread" (
    "thread_Id" SERIAL NOT NULL,
    "application_Id" INTEGER NOT NULL,
    "pwd_Id" INTEGER NOT NULL,
    "employer_Id" INTEGER NOT NULL,
    "created_at" TEXT NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Chat_Thread_pkey" PRIMARY KEY ("thread_Id")
);

-- CreateTable
CREATE TABLE "Chat_Message" (
    "message_Id" SERIAL NOT NULL,
    "thread_Id" INTEGER NOT NULL,
    "sender_Id" INTEGER NOT NULL,
    "content" TEXT NOT NULL,
    "created_at" TEXT NOT NULL,

    CONSTRAINT "Chat_Message_pkey" PRIMARY KEY ("message_Id")
);

-- AddForeignKey
ALTER TABLE "Chat_Message" ADD CONSTRAINT "Chat_Message_thread_Id_fkey" FOREIGN KEY ("thread_Id") REFERENCES "Chat_Thread"("thread_Id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Chat_Message" ADD CONSTRAINT "Chat_Message_sender_Id_fkey" FOREIGN KEY ("sender_Id") REFERENCES "Users"("user_Id") ON DELETE CASCADE ON UPDATE CASCADE;
