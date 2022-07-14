import { SignOptions, sign, decode } from 'jsonwebtoken';
import configJWT from '../config/configJWT';
import IJwt from '../interfaces/iToken';

const { secret, configs: { expiresIn } } = configJWT;
const loginConfigs: SignOptions = {
  algorithm: 'HS256',
  expiresIn,
};

const tokenJWT = (username: string) => {
  const token = sign({ data: username }, secret, loginConfigs);
  return token;
};

const decodeToken = async (token: string): Promise<IJwt> => {
  const tokenDecoded = await decode(token);
  return tokenDecoded as IJwt;
};

export { decodeToken };
export default tokenJWT;