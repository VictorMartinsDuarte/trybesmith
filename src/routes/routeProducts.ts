import { Router } from 'express';
import controllerProducts from '../controllers/controllerProducts';

const products = Router();

products.get('/', controllerProducts.getAll);

export default products;