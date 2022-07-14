import { Request, Response, NextFunction } from 'express';

const usernameValid = (req: Request, res: Response, next: NextFunction) => {
  const { username } = req.body;
  if (!username) return res.status(400).json({ message: '"username" is required' });
  next();
};

const passwordValid = (req: Request, res: Response, next: NextFunction) => {
  const { password } = req.body;
  if (!password) return res.status(400).json({ message: '"password" is required' });
  next();
};

export default {
  usernameValid,
  passwordValid,
};
