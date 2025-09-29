/*
  Warnings:

  - Changed the type of `anoConclusao` on the `Obra` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "public"."Obra" DROP COLUMN "anoConclusao",
ADD COLUMN     "anoConclusao" INTEGER NOT NULL;
