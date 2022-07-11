import { Request, Response } from 'express';
import serviceProducts from '../services/serviceProducts';

const getAll = async (_req: Request, res: Response) => {
  const allProducts = await serviceProducts.getAll();
  return res.status(200).json(allProducts);
};

export default {
  getAll,
};