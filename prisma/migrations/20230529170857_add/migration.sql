-- CreateTable
CREATE TABLE "TeviweetLike" (
    "id" TEXT NOT NULL,
    "user" TEXT NOT NULL,
    "teviweetId" TEXT NOT NULL,

    CONSTRAINT "TeviweetLike_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "TeviweetLike" ADD CONSTRAINT "TeviweetLike_teviweetId_fkey" FOREIGN KEY ("teviweetId") REFERENCES "Teviweet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
