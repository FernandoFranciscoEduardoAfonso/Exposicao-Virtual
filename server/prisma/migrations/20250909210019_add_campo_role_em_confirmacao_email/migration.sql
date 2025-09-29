/*
  Warnings:

  - Added the required column `role` to the `ConfirmacaoEmail` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."ConfirmacaoEmail" ADD COLUMN     "role" TEXT NOT NULL;
