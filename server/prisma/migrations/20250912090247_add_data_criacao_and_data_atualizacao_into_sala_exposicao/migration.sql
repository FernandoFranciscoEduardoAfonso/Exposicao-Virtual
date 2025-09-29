/*
  Warnings:

  - Added the required column `dataAtualizacao` to the `SalaExposicao` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."SalaExposicao" ADD COLUMN     "dataAtualizacao" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "dataCriacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
