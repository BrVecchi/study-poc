import cors from 'cors';
import dotenv from 'dotenv';
import express, { Request, Response } from 'express';

import { dishRouter } from './routes/dishes.routes.js';
import { harmonizationRouter } from './routes/harmonization.routes.js';
import { wineRouter } from './routes/wines.routes.js';

dotenv.config();

const server = express();
server.use(express.json());
server.use(cors());
server.use(harmonizationRouter)
server.use(dishRouter)
server.use(wineRouter)

server.get("/health", (_req: Request, res: Response) => res.send("ok"));

const port = process.env.PORT;
server.listen(port, () => {
  console.log(`Executando na porta ${port}`);
});
