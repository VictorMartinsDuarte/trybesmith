import IUsers from '../interfaces/iUsers';
import modelUsers from '../models/modelUsers';
import tokenJWT from '../utils/tokenJWT';

const createUser = async ({ username, classe, level, password }: IUsers) => {
  await modelUsers.createUser({ username, classe, level, password });
  const token = tokenJWT(username);
  return token;
};

export default {
  createUser,
};