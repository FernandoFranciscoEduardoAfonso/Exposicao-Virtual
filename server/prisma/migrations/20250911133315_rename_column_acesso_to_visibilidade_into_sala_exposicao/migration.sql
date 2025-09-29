/*
  Warnings:

  - You are about to drop the column `acesso` on the `SalaExposicao` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."SalaExposicao" DROP COLUMN "acesso",
ADD COLUMN     "visibilidade" TEXT NOT NULL DEFAULT 'publico';
