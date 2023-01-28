import prisma from '../database/db.js';

export async function findMany() {
    return prisma.labels.findMany();
}
