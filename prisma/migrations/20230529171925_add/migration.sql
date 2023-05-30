/*
  Warnings:

  - You are about to drop the column `referenceTweetId` on the `Teviweet` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Teviweet" DROP CONSTRAINT "Teviweet_referenceTweetId_fkey";

-- AlterTable
ALTER TABLE "Teviweet" DROP COLUMN "referenceTweetId",
ADD COLUMN     "commentTeviweetId" TEXT,
ADD COLUMN     "reteviweetId" TEXT;

-- AddForeignKey
ALTER TABLE "Teviweet" ADD CONSTRAINT "Teviweet_reteviweetId_fkey" FOREIGN KEY ("reteviweetId") REFERENCES "Teviweet"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Teviweet" ADD CONSTRAINT "Teviweet_commentTeviweetId_fkey" FOREIGN KEY ("commentTeviweetId") REFERENCES "Teviweet"("id") ON DELETE SET NULL ON UPDATE CASCADE;
