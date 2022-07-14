import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import configJWT from '../config/configJWT';

const tokenExists = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ message: 'Token not found' });
  next();
};

const tokenValid = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  const tokenString = String(token);
  try {
    verify(tokenString, configJWT.secret);
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
  next();
};

export { 
  tokenExists,
  tokenValid,
};