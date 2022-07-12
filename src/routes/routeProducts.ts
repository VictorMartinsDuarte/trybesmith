import { Router } from 'express';
import controllerProducts from '../controllers/controllerProducts';
import { nameValid, amountValid } from '../middlewares/middleProducts';

const products = Router();

products.get('/', controllerProducts.getAll);
products.post('/', nameValid, amountValid, controllerProducts.createProduct);

export default products;