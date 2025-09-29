/*
  Warnings:

  - A unique constraint covering the columns `[descricao]` on the table `Categoria` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Categoria_descricao_key" ON "public"."Categoria"("descricao");
