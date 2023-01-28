import { Router } from 'express';

import { listAllLabels } from '../controllers/label.controller.js';

export const labelRouter = Router();

labelRouter.get("/labels", listAllLabels);
