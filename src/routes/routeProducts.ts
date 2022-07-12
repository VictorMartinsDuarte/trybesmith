import { Router } from 'express';
import controllerProducts from '../controllers/controllerProducts';

const products = Router();

products.get('/', controllerProducts.getAll);
products.post('/', controllerProducts.createProduct);

export default products;