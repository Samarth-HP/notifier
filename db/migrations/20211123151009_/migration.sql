/*
  Warnings:

  - Changed the type of `providerName` on the `Provider` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "ProviderName" AS ENUM ('CDAC', 'GUPSHUP');

-- AlterTable
ALTER TABLE "Provider" DROP COLUMN "providerName",
ADD COLUMN     "providerName" "ProviderName" NOT NULL;
