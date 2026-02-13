import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@prisma/client';
import pg from 'pg';

const { Pool } = pg;

// Configuración para Prisma 7
const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);

const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient;
    pool: typeof pool;
};

export const prisma = globalForPrisma.prisma || new PrismaClient({ adapter });

// Guardar pool también para poder cerrarlo si es necesario
if (!globalForPrisma.pool) {
    globalForPrisma.pool = pool;
}

if (process.env.NODE_ENV !== 'production') {
    globalForPrisma.prisma = prisma;
}

export default prisma;
