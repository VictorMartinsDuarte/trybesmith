import { SignOptions, sign } from 'jsonwebtoken';
import configJWT from '../config/configJWT';

const { secret, configs: { expiresIn } } = configJWT;
const loginConfigs: SignOptions = {
  algorithm: 'HS256',
  expiresIn,
};

const tokenJWT = (username: string) => {
  const token = sign({ data: username }, secret, loginConfigs);
  return token;
};

export default tokenJWT;