/*
  Warnings:

  - You are about to drop the `Classificacao` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."Classificacao" DROP CONSTRAINT "Classificacao_idUsuario_fkey";

-- DropTable
DROP TABLE "public"."Classificacao";

-- CreateTable
CREATE TABLE "public"."ClassificacaoArtista" (
    "idClassificacao" SERIAL NOT NULL,
    "estrelas" INTEGER NOT NULL,
    "comentario" TEXT NOT NULL,
    "dataCriacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dataAtualizacao" TIMESTAMP(3) NOT NULL,
    "idUsuario" UUID NOT NULL,
    "idAvaliadador" TEXT NOT NULL,

    CONSTRAINT "ClassificacaoArtista_pkey" PRIMARY KEY ("idClassificacao")
);

-- CreateTable
CREATE TABLE "public"."ClassificacaoObra" (
    "idClassificacao" SERIAL NOT NULL,
    "estrelas" INTEGER NOT NULL,
    "comentario" TEXT NOT NULL,
    "dataCriacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dataAtualizacao" TIMESTAMP(3) NOT NULL,
    "idObra" UUID NOT NULL,
    "idAvaliadador" TEXT NOT NULL,

    CONSTRAINT "ClassificacaoObra_pkey" PRIMARY KEY ("idClassificacao")
);

-- AddForeignKey
ALTER TABLE "public"."ClassificacaoArtista" ADD CONSTRAINT "ClassificacaoArtista_idUsuario_fkey" FOREIGN KEY ("idUsuario") REFERENCES "public"."Usuario"("idUsuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ClassificacaoObra" ADD CONSTRAINT "ClassificacaoObra_idObra_fkey" FOREIGN KEY ("idObra") REFERENCES "public"."Obra"("idObra") ON DELETE RESTRICT ON UPDATE CASCADE;
