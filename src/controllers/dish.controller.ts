import { Request, Response } from 'express';

import { dish, dishHamonized } from '../protocols/dish.protocol.js';
import { findMany, insertUnique } from '../repositories/dish.repositories.js';
import { findWineId } from '../repositories/wine.repositories.js';
import { dishSchema } from '../schemas/dish.schema.js';

export async function listAllDishes(req: Request, res: Response){
    try {
        const dishes = (await findMany()).rows
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
        const wineId = Number((await findWineId(newDish)).rows[0].id)
        const dish: dish = {
            name: newDish.name,
            wine_id: wineId
        }
        await insertUnique(dish)
        res.status(201).send(`Inserted dish ${newDish.name} succesfully`)
    } catch (error) {
        console.log(error)
        res.status(500).send(error.message)
    }
}