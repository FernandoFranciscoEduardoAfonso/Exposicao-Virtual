/*
  Warnings:

  - Added the required column `anoConclusao` to the `Obra` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Obra" ADD COLUMN     "anoConclusao" TEXT NOT NULL;
