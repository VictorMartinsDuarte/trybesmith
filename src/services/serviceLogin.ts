import modelLogin from '../models/modelLogin';
import tokenJWT from '../utils/tokenJWT';

const getUser = async (username: string, password: string) => {
  const user = await modelLogin.getUser(username, password);
  const token = tokenJWT(username);
  return token;
};

export default {
  getUser,
};