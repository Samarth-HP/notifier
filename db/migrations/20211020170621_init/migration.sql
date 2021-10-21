-- CreateEnum
CREATE TYPE "TextType" AS ENUM ('UNICODE', 'ENGLISH');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('QUEUED', 'SENT_TO_PROVIDER', 'DELIEVERED', 'FAILED_AT_PROVIDER', 'FAILED');

-- CreateEnum
CREATE TYPE "Event" AS ENUM ('QUEUED', 'SENT_TO_PROVIDER', 'DELIEVERED', 'FAILED_AT_PROVIDER', 'FAILED');

-- CreateTable
CREATE TABLE "Provider" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "id" SERIAL NOT NULL,
    "channel" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "config" JSONB NOT NULL,
    "unitCost" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Provider_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sms" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "id" BIGSERIAL NOT NULL,
    "providerId" INTEGER NOT NULL,
    "phone" TEXT NOT NULL,
    "user" UUID NOT NULL,
    "org" UUID NOT NULL,
    "text" TEXT NOT NULL,
    "type" "TextType" NOT NULL,
    "status" "Status" NOT NULL DEFAULT E'QUEUED',
    "retries" INTEGER NOT NULL DEFAULT 0,
    "providerMessageId" TEXT,
    "meta" JSONB,

    CONSTRAINT "Sms_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Audit" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "id" BIGSERIAL NOT NULL,
    "smsId" BIGINT NOT NULL,
    "event" "Event" NOT NULL,

    CONSTRAINT "Audit_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Sms" ADD CONSTRAINT "Sms_providerId_fkey" FOREIGN KEY ("providerId") REFERENCES "Provider"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Audit" ADD CONSTRAINT "Audit_smsId_fkey" FOREIGN KEY ("smsId") REFERENCES "Sms"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
