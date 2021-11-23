/*
  Warnings:

  - You are about to drop the column `provider` on the `Provider` table. All the data in the column will be lost.
  - Added the required column `providerName` to the `Provider` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Provider" DROP COLUMN "provider",
ADD COLUMN     "providerName" TEXT NOT NULL;
