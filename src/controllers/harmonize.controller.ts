import { Request, Response } from 'express';

import { findMany } from '../repositories/dish.repositories.js';

export async function listAllHarmonizations(req: Request, res: Response) {
    try {
        const dishes = (await findMany())
        const result = dishes.map(dish => {
            return `The dish ${dish.name} is harmonized with the wine ${dish.wines.type} - ${dish.wines.body}.`
        })
        res.status(200).send(result)
    } catch (error) {
        console.log(error)
        res.status(500).send(error.message)
    }
}