import { Router } from 'express';

import { listAllWines } from '../controllers/wine.controller.js';

export const wineRouter = Router();

wineRouter.get("/wines", listAllWines);
