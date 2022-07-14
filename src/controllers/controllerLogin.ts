import { Request, Response } from 'express';
import serviceLogin from '../services/serviceLogin';

const getUser = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const token = await serviceLogin.getUser(username, password);
    return res.status(200).json({ token });
  } catch (error) {
    return res.status(500).json({ message: 'Failed to login, please try again.' });
  }
};

export default {
  getUser,
};