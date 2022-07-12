import { Request, Response } from 'express';
import serviceProducts from '../services/serviceProducts';

const getAll = async (_req: Request, res: Response) => {
  try {
    const allProducts = await serviceProducts.getAll();
    return res.status(200).json(allProducts);
  } catch (error) {
    return res.status(500).json({ message: 'Products not found' });
  }
};

const createProduct = async (req: Request, res: Response) => {
  try {
    const newUser = await serviceProducts.createProduct(req.body);
    return res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Could not register product' });
  }
};

export default {
  getAll,
  createProduct,
};