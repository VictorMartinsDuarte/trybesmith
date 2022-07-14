import { Router } from 'express';
import controllerOrders from '../controllers/controllerOrders';
import { productsIdsValid } from '../middlewares/middleProducts';
import { tokenExists, tokenValid } from '../middlewares/middleToken';

const orders = Router();

orders.get('/', controllerOrders.getAll);
orders.post('/', tokenExists, tokenValid, productsIdsValid, controllerOrders.createOrder);

export default orders;