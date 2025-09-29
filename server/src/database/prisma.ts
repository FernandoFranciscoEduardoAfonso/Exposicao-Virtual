import { PrismaClient } from "@prisma/client";
export const prisma = new PrismaClient()

export const openConnection = async () => await prisma.$connect()
export const closeConnection = async () => await prisma.$disconnect()
