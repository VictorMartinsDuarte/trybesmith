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

export default {
  getAll,
};