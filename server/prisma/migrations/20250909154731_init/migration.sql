-- CreateTable
CREATE TABLE "public"."InformacaoPlataforma" (
    "idInformacao" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "versao" DOUBLE PRECISION NOT NULL,
    "termosCondicoes" TEXT NOT NULL,
    "politicas" TEXT NOT NULL,
    "descricao" TEXT,

    CONSTRAINT "InformacaoPlataforma_pkey" PRIMARY KEY ("idInformacao")
);

-- CreateTable
CREATE TABLE "public"."ConfirmacaoEmail" (
    "idConfirmacao" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "codigo" TEXT NOT NULL,
    "dataExpiracao" TEXT NOT NULL,

    CONSTRAINT "ConfirmacaoEmail_pkey" PRIMARY KEY ("idConfirmacao")
);

-- CreateTable
CREATE TABLE "public"."ConviteAcesso" (
    "idConvite" SERIAL NOT NULL,
    "codigo" TEXT NOT NULL,
    "dataExpiracao" TEXT NOT NULL,
    "idSalaExposicao" UUID NOT NULL,
    "idUsuario" UUID NOT NULL,

    CONSTRAINT "ConviteAcesso_pkey" PRIMARY KEY ("idConvite")
);

-- CreateTable
CREATE TABLE "public"."Usuario" (
    "idUsuario" UUID NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "nif" TEXT,
    "senha" TEXT NOT NULL,
    "dataRegistro" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dataAtualizacao" TIMESTAMP(3) NOT NULL,
    "estado" BOOLEAN NOT NULL DEFAULT true,
    "idRole" TEXT NOT NULL,
    "idProvincia" UUID,
    "idPerfil" INTEGER NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("idUsuario")
);

-- CreateTable
CREATE TABLE "public"."Role" (
    "idRole" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("idRole")
);

-- CreateTable
CREATE TABLE "public"."PerfilUsuario" (
    "idPerfil" SERIAL NOT NULL,
    "biografia" TEXT,
    "isVerificado" BOOLEAN DEFAULT false,
    "imagemPerfil" TEXT,
    "dataAtualizacao" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PerfilUsuario_pkey" PRIMARY KEY ("idPerfil")
);

-- CreateTable
CREATE TABLE "public"."Telefone" (
    "idTelefone" SERIAL NOT NULL,
    "numero" TEXT NOT NULL,
    "codigoPais" TEXT NOT NULL,
    "tipo" TEXT NOT NULL DEFAULT 'padrao',
    "dataRegistro" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dataAtualizacao" TIMESTAMP(3) NOT NULL,
    "idUsuario" UUID NOT NULL,

    CONSTRAINT "Telefone_pkey" PRIMARY KEY ("idTelefone")
);

-- CreateTable
CREATE TABLE "public"."Pais" (
    "idPais" UUID NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "Pais_pkey" PRIMARY KEY ("idPais")
);

-- CreateTable
CREATE TABLE "public"."Provincia" (
    "idProvincia" UUID NOT NULL,
    "nome" TEXT NOT NULL,
    "idPais" UUID NOT NULL,

    CONSTRAINT "Provincia_pkey" PRIMARY KEY ("idProvincia")
);

-- CreateTable
CREATE TABLE "public"."Classificacao" (
    "idClassificacao" SERIAL NOT NULL,
    "estrelas" INTEGER NOT NULL,
    "comentario" TEXT NOT NULL,
    "dataCriacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dataAtualizacao" TIMESTAMP(3) NOT NULL,
    "idUsuario" UUID NOT NULL,
    "idAvaliadador" TEXT NOT NULL,

    CONSTRAINT "Classificacao_pkey" PRIMARY KEY ("idClassificacao")
);

-- CreateTable
CREATE TABLE "public"."SalaExposicao" (
    "idSalaExposicao" UUID NOT NULL,
    "nome" TEXT NOT NULL,
    "acesso" TEXT NOT NULL DEFAULT 'publico',
    "idUsuario" UUID NOT NULL,

    CONSTRAINT "SalaExposicao_pkey" PRIMARY KEY ("idSalaExposicao")
);

-- CreateTable
CREATE TABLE "public"."Acesso" (
    "idAcesso" SERIAL NOT NULL,
    "idSalaExposicao" UUID NOT NULL,
    "idUsuario" UUID NOT NULL,

    CONSTRAINT "Acesso_pkey" PRIMARY KEY ("idAcesso")
);

-- CreateTable
CREATE TABLE "public"."Chat" (
    "idChat" TEXT NOT NULL,
    "isOpen" BOOLEAN NOT NULL DEFAULT true,
    "idSalaExposicao" UUID NOT NULL,

    CONSTRAINT "Chat_pkey" PRIMARY KEY ("idChat")
);

-- CreateTable
CREATE TABLE "public"."Mensagem" (
    "idMensagem" SERIAL NOT NULL,
    "conteudo" TEXT NOT NULL,
    "dataCriacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dataEdicao" TIMESTAMP(3) NOT NULL,
    "urlArquivo" TEXT,
    "idUsuario" UUID NOT NULL,
    "idChat" TEXT NOT NULL,

    CONSTRAINT "Mensagem_pkey" PRIMARY KEY ("idMensagem")
);

-- CreateTable
CREATE TABLE "public"."AcessoMensagem" (
    "idAcessoMensagem" SERIAL NOT NULL,
    "isVisivel" BOOLEAN NOT NULL DEFAULT true,
    "idUsuario" UUID NOT NULL,
    "mensagemIdMensagem" INTEGER NOT NULL,

    CONSTRAINT "AcessoMensagem_pkey" PRIMARY KEY ("idAcessoMensagem")
);

-- CreateTable
CREATE TABLE "public"."Notificacao" (
    "idNotificacao" TEXT NOT NULL,
    "conteudo" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "estado" TEXT NOT NULL DEFAULT 'pendente',
    "idUsuario" UUID NOT NULL,

    CONSTRAINT "Notificacao_pkey" PRIMARY KEY ("idNotificacao")
);

-- CreateTable
CREATE TABLE "public"."Obra" (
    "idObra" UUID NOT NULL,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "preco" TEXT,
    "dataCriacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dataAtualizacao" TIMESTAMP(3) NOT NULL,
    "idCategoria" TEXT NOT NULL,
    "dataAbertura" TEXT,

    CONSTRAINT "Obra_pkey" PRIMARY KEY ("idObra")
);

-- CreateTable
CREATE TABLE "public"."Categoria" (
    "idCategoria" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "Categoria_pkey" PRIMARY KEY ("idCategoria")
);

-- CreateTable
CREATE TABLE "public"."ObrasFavoritas" (
    "idFavorito" TEXT NOT NULL,
    "idCliente" UUID NOT NULL,
    "idObra" UUID NOT NULL,

    CONSTRAINT "ObrasFavoritas_pkey" PRIMARY KEY ("idFavorito")
);

-- CreateTable
CREATE TABLE "public"."ArtistasFavoritos" (
    "idFavorito" TEXT NOT NULL,
    "idCliente" UUID NOT NULL,
    "idUsuario" UUID NOT NULL,

    CONSTRAINT "ArtistasFavoritos_pkey" PRIMARY KEY ("idFavorito")
);

-- CreateTable
CREATE TABLE "public"."Denuncia" (
    "idDenuncia" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "dataCriacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dataAtualizacao" TIMESTAMP(3) NOT NULL,
    "urlArquivo" TEXT,
    "estado" TEXT NOT NULL DEFAULT 'pendente',
    "idUsuario" UUID NOT NULL,
    "idTipoDenuncia" INTEGER NOT NULL,

    CONSTRAINT "Denuncia_pkey" PRIMARY KEY ("idDenuncia")
);

-- CreateTable
CREATE TABLE "public"."TipoDenuncia" (
    "idTipoDenuncia" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "TipoDenuncia_pkey" PRIMARY KEY ("idTipoDenuncia")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "public"."Usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_nif_key" ON "public"."Usuario"("nif");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_idRole_key" ON "public"."Usuario"("idRole");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_idPerfil_key" ON "public"."Usuario"("idPerfil");

-- CreateIndex
CREATE UNIQUE INDEX "Role_descricao_key" ON "public"."Role"("descricao");

-- CreateIndex
CREATE UNIQUE INDEX "Pais_nome_key" ON "public"."Pais"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "Categoria_slug_key" ON "public"."Categoria"("slug");

-- AddForeignKey
ALTER TABLE "public"."ConviteAcesso" ADD CONSTRAINT "ConviteAcesso_idSalaExposicao_fkey" FOREIGN KEY ("idSalaExposicao") REFERENCES "public"."SalaExposicao"("idSalaExposicao") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ConviteAcesso" ADD CONSTRAINT "ConviteAcesso_idUsuario_fkey" FOREIGN KEY ("idUsuario") REFERENCES "public"."Usuario"("idUsuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Usuario" ADD CONSTRAINT "Usuario_idRole_fkey" FOREIGN KEY ("idRole") REFERENCES "public"."Role"("idRole") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Usuario" ADD CONSTRAINT "Usuario_idProvincia_fkey" FOREIGN KEY ("idProvincia") REFERENCES "public"."Provincia"("idProvincia") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Usuario" ADD CONSTRAINT "Usuario_idPerfil_fkey" FOREIGN KEY ("idPerfil") REFERENCES "public"."PerfilUsuario"("idPerfil") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Telefone" ADD CONSTRAINT "Telefone_idUsuario_fkey" FOREIGN KEY ("idUsuario") REFERENCES "public"."Usuario"("idUsuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Provincia" ADD CONSTRAINT "Provincia_idPais_fkey" FOREIGN KEY ("idPais") REFERENCES "public"."Pais"("idPais") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Classificacao" ADD CONSTRAINT "Classificacao_idUsuario_fkey" FOREIGN KEY ("idUsuario") REFERENCES "public"."Usuario"("idUsuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."SalaExposicao" ADD CONSTRAINT "SalaExposicao_idUsuario_fkey" FOREIGN KEY ("idUsuario") REFERENCES "public"."Usuario"("idUsuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Acesso" ADD CONSTRAINT "Acesso_idSalaExposicao_fkey" FOREIGN KEY ("idSalaExposicao") REFERENCES "public"."SalaExposicao"("idSalaExposicao") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Acesso" ADD CONSTRAINT "Acesso_idUsuario_fkey" FOREIGN KEY ("idUsuario") REFERENCES "public"."Usuario"("idUsuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Chat" ADD CONSTRAINT "Chat_idSalaExposicao_fkey" FOREIGN KEY ("idSalaExposicao") REFERENCES "public"."SalaExposicao"("idSalaExposicao") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Mensagem" ADD CONSTRAINT "Mensagem_idUsuario_fkey" FOREIGN KEY ("idUsuario") REFERENCES "public"."Usuario"("idUsuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Mensagem" ADD CONSTRAINT "Mensagem_idChat_fkey" FOREIGN KEY ("idChat") REFERENCES "public"."Chat"("idChat") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."AcessoMensagem" ADD CONSTRAINT "AcessoMensagem_idUsuario_fkey" FOREIGN KEY ("idUsuario") REFERENCES "public"."Usuario"("idUsuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."AcessoMensagem" ADD CONSTRAINT "AcessoMensagem_mensagemIdMensagem_fkey" FOREIGN KEY ("mensagemIdMensagem") REFERENCES "public"."Mensagem"("idMensagem") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Notificacao" ADD CONSTRAINT "Notificacao_idUsuario_fkey" FOREIGN KEY ("idUsuario") REFERENCES "public"."Usuario"("idUsuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Obra" ADD CONSTRAINT "Obra_idCategoria_fkey" FOREIGN KEY ("idCategoria") REFERENCES "public"."Categoria"("idCategoria") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ObrasFavoritas" ADD CONSTRAINT "ObrasFavoritas_idObra_fkey" FOREIGN KEY ("idObra") REFERENCES "public"."Obra"("idObra") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ArtistasFavoritos" ADD CONSTRAINT "ArtistasFavoritos_idUsuario_fkey" FOREIGN KEY ("idUsuario") REFERENCES "public"."Usuario"("idUsuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Denuncia" ADD CONSTRAINT "Denuncia_idUsuario_fkey" FOREIGN KEY ("idUsuario") REFERENCES "public"."Usuario"("idUsuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Denuncia" ADD CONSTRAINT "Denuncia_idTipoDenuncia_fkey" FOREIGN KEY ("idTipoDenuncia") REFERENCES "public"."TipoDenuncia"("idTipoDenuncia") ON DELETE RESTRICT ON UPDATE CASCADE;
