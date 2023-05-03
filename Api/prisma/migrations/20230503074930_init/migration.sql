/*
  Warnings:

  - You are about to drop the column `titre` on the `ticket` table. All the data in the column will be lost.
  - Added the required column `title` to the `ticket` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ticket" DROP COLUMN "titre",
ADD COLUMN     "title" TEXT NOT NULL;
