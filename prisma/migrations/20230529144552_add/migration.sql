-- AlterTable
ALTER TABLE "Teviweet" ADD COLUMN     "referenceTweetId" TEXT;

-- AddForeignKey
ALTER TABLE "Teviweet" ADD CONSTRAINT "Teviweet_referenceTweetId_fkey" FOREIGN KEY ("referenceTweetId") REFERENCES "Teviweet"("id") ON DELETE SET NULL ON UPDATE CASCADE;
