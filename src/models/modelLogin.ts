import ILogin from '../interfaces/iLogin';
import connection from './connection';

const getUser = async (username: string, password: string): Promise<ILogin[]> => {
  const [user] = await connection.execute(`SELECT * FROM Trybesmith.Users 
  WHERE username=? and password=?;`, [username, password]);
  return user as ILogin[];
};

export default {
  getUser,
};