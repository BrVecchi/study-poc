import { QueryResult } from 'pg';

import { connectionDB } from '../database/db.js';
import { dishHamonized } from '../protocols/dish.protocol.js';
import { wineEntity } from '../protocols/wine.protocol.js';

export async function findMany(): Promise<QueryResult<wineEntity>> {
    return (await connectionDB.query(`SELECT * FROM wines;`))
}

export async function findWineId(dish: dishHamonized): Promise<QueryResult<wineEntity>> {
    return (await connectionDB.query(`SELECT * FROM wines WHERE type = $1 AND body = $2 ;`, [dish.type, dish.body]))
}

