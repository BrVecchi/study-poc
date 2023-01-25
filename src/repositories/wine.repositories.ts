

import prisma from '../database/db.js';
import { dishHamonized } from '../protocols/dish.protocol.js';

export async function findMany() {
    return prisma.wines.findMany();
}

export async function findWineId(dish: dishHamonized) {
    []
}

