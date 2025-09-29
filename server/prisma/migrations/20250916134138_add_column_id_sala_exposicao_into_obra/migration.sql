/*
  Warnings:

  - Added the required column `idSalaExposicao` to the `Obra` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Obra" ADD COLUMN     "idSalaExposicao" UUID NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."Obra" ADD CONSTRAINT "Obra_idSalaExposicao_fkey" FOREIGN KEY ("idSalaExposicao") REFERENCES "public"."SalaExposicao"("idSalaExposicao") ON DELETE RESTRICT ON UPDATE CASCADE;
