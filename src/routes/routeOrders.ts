import { Router } from 'express';
import controllerOrders from '../controllers/controllerOrders';

const orders = Router();

orders.get('/', controllerOrders.getAll);

export default orders;