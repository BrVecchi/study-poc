import { Router } from 'express';

import { insertDish, listAllDishes } from '../controllers/dish.controller.js';

export const dishRouter = Router();

dishRouter.get("/dishes", listAllDishes);
dishRouter.post("/dishes", insertDish);
