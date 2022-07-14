import { Request, Response } from 'express';
import serviceOrders from '../services/serviceOrders';

const getAll = async (_req: Request, res: Response) => {
  try {
    const allOrders = await serviceOrders.getAll();
    return res.status(200).json(allOrders);
  } catch (error) {
    return res.status(500).json({ message: 'Could not find orders.' });
  }
};

const createOrder = async (req: Request, res: Response) => {
  try {
    const { productsIds } = req.body;
    const token = req.headers.authorization;
    const tokenString = String(token);
    const newOrder = await serviceOrders.createOrder(productsIds, tokenString);
    return res.status(201).json(newOrder);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Failed to create order.' });
  }
};

export default {
  getAll,
  createOrder,
};