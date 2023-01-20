import { QueryResult } from 'pg';

import { connectionDB } from '../database/db.js';
import { dish, dishHamonized } from '../protocols/dish.protocol.js';

export async function findMany(): Promise<QueryResult<dishHamonized>> {
    return (await connectionDB.query(`SELECT d.name, w.type, w.body FROM dishes d JOIN wines w ON w.id = d.wine_id;`))
}

export async function insertUnique(dish: dish) {
    await connectionDB.query(`INSERT INTO dishes (name, wine_id) VALUES ($1, $2)`, [dish.name, dish.wine_id])
}