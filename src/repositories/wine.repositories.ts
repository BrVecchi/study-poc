import prisma from '../database/db.js';
import { dishHamonized } from '../protocols/dish.protocol.js';
import { labelEntity } from '../protocols/label.protocol.js';
import { wineEntity } from '../protocols/wine.protocol.js';

export async function findMany(): Promise<(wineEntity & { labels: labelEntity })[]>{
    return prisma.wines.findMany({
        include: {
            labels: true
        }
    });
}

export async function findWineId(dish: dishHamonized) {
    []
}

