import { Request, Response } from 'express';
import serviceUsers from '../services/serviceUsers';

const createUser = async (req: Request, res: Response) => {
  try {
    const token = await serviceUsers.createUser(req.body);
    return res.status(201).json({ token });
  } catch (error) {
    return res.status(500).json({ message: 'Could not register user.' });
  }
};

export default {
  createUser,
};