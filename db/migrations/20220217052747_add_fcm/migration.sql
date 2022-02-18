-- AlterTable
ALTER TABLE "Audit" ADD COLUMN     "fCMId" BIGINT;

-- CreateTable
CREATE TABLE "FCM" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "id" BIGSERIAL NOT NULL,
    "deviceId" TEXT NOT NULL,
    "user" UUID NOT NULL,
    "org" UUID NOT NULL,
    "text" TEXT NOT NULL,
    "type" "TextType" NOT NULL,
    "status" "Status" NOT NULL DEFAULT E'QUEUED',
    "retries" INTEGER NOT NULL DEFAULT 0,
    "providerMessageId" TEXT,
    "meta" JSONB,
    "providerId" INTEGER,

    CONSTRAINT "FCM_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "FCM" ADD CONSTRAINT "FCM_providerId_fkey" FOREIGN KEY ("providerId") REFERENCES "Provider"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Audit" ADD CONSTRAINT "Audit_fCMId_fkey" FOREIGN KEY ("fCMId") REFERENCES "FCM"("id") ON DELETE SET NULL ON UPDATE CASCADE;
