import { Request, Response } from 'express';

import { dish, dishHamonized, newDish } from '../protocols/dish.protocol.js';
import { findMany, upsert } from '../repositories/dish.repositories.js';
import { findWineId } from '../repositories/wine.repositories.js';
import { dishSchema } from '../schemas/dish.schema.js';

export async function listAllDishes(req: Request, res: Response){
    try {
        const dishes = (await findMany())
        res.status(200).send(dishes)
    } catch (error) {
        console.log(error)
        res.status(500).send(error.message)
    }
}

export async function insertDish(req: Request, res: Response) {
    const newDish = req.body as dishHamonized;

    const {error} = dishSchema.validate(newDish);

    if(error) {
        return res.status(400).send({
            message: error.message
        })
    }
    try {
        const wineId = Number((await findWineId(newDish)))
        const dish: newDish = {
            id: newDish.dishId,
            name: newDish.name,
            wine_id: wineId
        }
        await upsert(dish)
        res.status(201).send(`Upserted dish ${newDish.name} succesfully`)
    } catch (error) {
        console.log(error)
        res.status(500).send(error.message)
    }
}