import { Request, Response } from 'express';

import { findMany } from '../repositories/wine.repositories.js';

export async function listAllWines(req: Request, res: Response) {
    try {
        const result = (await findMany()).rows
        res.status(200).send(result)
    } catch (error) {
        console.log(error)
        res.status(500).send(error.message)
    }
}