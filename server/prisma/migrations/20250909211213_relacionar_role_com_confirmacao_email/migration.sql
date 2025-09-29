/*
  Warnings:

  - You are about to drop the column `role` on the `ConfirmacaoEmail` table. All the data in the column will be lost.
  - Added the required column `idRole` to the `ConfirmacaoEmail` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."ConfirmacaoEmail" DROP COLUMN "role",
ADD COLUMN     "idRole" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."ConfirmacaoEmail" ADD CONSTRAINT "ConfirmacaoEmail_idRole_fkey" FOREIGN KEY ("idRole") REFERENCES "public"."Role"("idRole") ON DELETE RESTRICT ON UPDATE CASCADE;
