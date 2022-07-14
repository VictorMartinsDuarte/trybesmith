import modelLogin from '../models/modelLogin';
import tokenJWT from '../utils/tokenJWT';

const getUser = async (username: string, password: string) => {
  const user = await modelLogin.getUser(username, password);
  if (user.length < 1) return undefined;
  const userToken = tokenJWT(username);
  return userToken;
};

export default {
  getUser,
};