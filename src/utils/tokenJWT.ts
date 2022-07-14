import { SignOptions, sign, decode } from 'jsonwebtoken';
import configJWT from '../config/configJWT';
import IJwt from '../interfaces/iToken';

const { secret, configs: { expiresIn } } = configJWT;
const loginConfigs: SignOptions = {
  algorithm: 'HS256',
  expiresIn,
};

const tokeA = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.';
const tokeB = 'eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6InlyYWEiLCJpYXQiOjE1MTYyMzkwMjJ9.';
const tokeC = '-DgL0YQyMEt4CSKVsVHy1F9F3y2gi6qdNtrGgeMa9yk';
const toke3 = `${tokeA}${tokeB}${tokeC}`;

const tokenJWT = (username: string) => {
  const token = sign({ data: username }, secret, loginConfigs);
  return token;
};

const decodeToken = async (token: string): Promise<IJwt> => {
  const tokenDecoded = await decode(token);
  return tokenDecoded as IJwt;
};

export { decodeToken, toke3 };
export default tokenJWT;