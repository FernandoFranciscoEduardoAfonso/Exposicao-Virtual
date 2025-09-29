/*
  Warnings:

  - You are about to drop the column `dataAbertura` on the `Obra` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."Obra" DROP COLUMN "dataAbertura",
ADD COLUMN     "isOpen" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "public"."SalaExposicao" ADD COLUMN     "dataAbertura" TEXT,
ADD COLUMN     "isOpen" BOOLEAN NOT NULL DEFAULT true;
