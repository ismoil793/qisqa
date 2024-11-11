/*
  Warnings:

  - You are about to drop the column `userId` on the `Link` table. All the data in the column will be lost.
  - You are about to drop the column `pageImage` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `pagePath` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `pageTitle` on the `User` table. All the data in the column will be lost.
  - Added the required column `pageId` to the `Link` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Link" DROP CONSTRAINT "Link_userId_fkey";

-- DropIndex
DROP INDEX "User_pagePath_key";

-- AlterTable
ALTER TABLE "Link" DROP COLUMN "userId",
ADD COLUMN     "pageId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "pageImage",
DROP COLUMN "pagePath",
DROP COLUMN "pageTitle";

-- CreateTable
CREATE TABLE "Page" (
    "id" SERIAL NOT NULL,
    "path" TEXT NOT NULL,
    "title" TEXT,
    "image" TEXT,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Page_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Page_path_key" ON "Page"("path");

-- AddForeignKey
ALTER TABLE "Page" ADD CONSTRAINT "Page_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Link" ADD CONSTRAINT "Link_pageId_fkey" FOREIGN KEY ("pageId") REFERENCES "Page"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
