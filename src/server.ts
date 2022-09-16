import express, { Application, Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import { config } from './config/config';

const itemsRoutes = require('./routes/items-routes');
const ordersRoutes = require('./routes/orders-routes');
const dealsRoutes = require('./routes/deals-routes');

const server: Application = express();
server.use(express.json());

// sets headers for API
server.use((req: Request, res: Response, next: NextFunction) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
  next();
});

//sets routes for menu and orders
server.use('/api/menu', itemsRoutes);
server.use('/api/orders', ordersRoutes);
server.use('/api/deals', dealsRoutes);

//connects to mongodb
mongoose
  .connect(`${config.dbURL}`)
  .then(() => server.listen(config.server.port))
  .catch((error) => console.log(error.message));
