-- CreateTable
CREATE TABLE "public"."ImagensObra" (
    "idImagem" TEXT NOT NULL,
    "descricao" TEXT,
    "urlImagem" TEXT NOT NULL,
    "isMain" BOOLEAN NOT NULL,
    "idObra" UUID NOT NULL,

    CONSTRAINT "ImagensObra_pkey" PRIMARY KEY ("idImagem")
);

-- AddForeignKey
ALTER TABLE "public"."ImagensObra" ADD CONSTRAINT "ImagensObra_idObra_fkey" FOREIGN KEY ("idObra") REFERENCES "public"."Obra"("idObra") ON DELETE RESTRICT ON UPDATE CASCADE;
