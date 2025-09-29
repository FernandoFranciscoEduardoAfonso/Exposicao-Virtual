-- CreateTable
CREATE TABLE "public"."Link" (
    "idLink" TEXT NOT NULL,
    "site" TEXT,
    "facebook" TEXT,
    "linkedin" TEXT,
    "instagram" TEXT,
    "tiktok" TEXT,
    "idPerfil" INTEGER NOT NULL,

    CONSTRAINT "Link_pkey" PRIMARY KEY ("idLink")
);

-- CreateIndex
CREATE UNIQUE INDEX "Link_idPerfil_key" ON "public"."Link"("idPerfil");

-- AddForeignKey
ALTER TABLE "public"."Link" ADD CONSTRAINT "Link_idPerfil_fkey" FOREIGN KEY ("idPerfil") REFERENCES "public"."PerfilUsuario"("idPerfil") ON DELETE RESTRICT ON UPDATE CASCADE;
