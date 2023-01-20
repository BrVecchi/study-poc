import { Router } from 'express';

import { listAllHarmonizations } from '../controllers/harmonize.controller.js';

export const harmonizationRouter = Router();

harmonizationRouter.get("/harmonizations", listAllHarmonizations);