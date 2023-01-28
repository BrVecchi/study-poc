import prisma from '../database/db.js';
import { dish, dishEntity, newDish } from '../protocols/dish.protocol.js';
import { labelEntity } from '../protocols/label.protocol.js';
import { wineEntity } from '../protocols/wine.protocol.js';

export async function findMany(): Promise<
  (dishEntity & { wines: wineEntity & {labels: labelEntity} } )[]
> {
  return await prisma.dishes.findMany({
    include: {
      wines: {
        include: {
          labels: true
        }
      }
    },
  });
}

export async function upsert(dish: newDish) {
  return await prisma.dishes.upsert({
    where: {
      id: dish.id || 0,
    },
    create: dish as dish,
    update: dish,
  });
}
