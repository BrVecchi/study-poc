import { Request, Response } from 'express';

import { findMany } from '../repositories/label.repositories.js';

export async function listAllLabels(req: Request, res: Response) {
    try {
        const result = (await findMany())
        res.status(200).send(result)
    } catch (error) {
        console.log(error)
        res.status(500).send(error.message)
    }
}