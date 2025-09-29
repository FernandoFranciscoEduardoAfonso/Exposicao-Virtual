/*
  Warnings:

  - Added the required column `modo` to the `Acesso` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Acesso" ADD COLUMN     "modo" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "public"."SolicitacaoAcesso" (
    "idSolicitacao" SERIAL NOT NULL,
    "codigo" TEXT NOT NULL,
    "idSalaExposicao" UUID NOT NULL,
    "idUsuario" UUID NOT NULL,

    CONSTRAINT "SolicitacaoAcesso_pkey" PRIMARY KEY ("idSolicitacao")
);

-- AddForeignKey
ALTER TABLE "public"."SolicitacaoAcesso" ADD CONSTRAINT "SolicitacaoAcesso_idSalaExposicao_fkey" FOREIGN KEY ("idSalaExposicao") REFERENCES "public"."SalaExposicao"("idSalaExposicao") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."SolicitacaoAcesso" ADD CONSTRAINT "SolicitacaoAcesso_idUsuario_fkey" FOREIGN KEY ("idUsuario") REFERENCES "public"."Usuario"("idUsuario") ON DELETE RESTRICT ON UPDATE CASCADE;
