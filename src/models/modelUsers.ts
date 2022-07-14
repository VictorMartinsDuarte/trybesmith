import { ResultSetHeader } from 'mysql2';
import IUsers, { IUserId } from '../interfaces/iUsers';
import connection from './connection';

const createUser = async ({ username, classe, level, password }: IUsers): Promise<IUsers> => {
  const [inserted] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?);',
    [username, classe, level, password],
  );
  const { insertId: id } = inserted;
  const newUser: IUsers = { id, username, classe, level, password };
  return newUser;
};

const getUserId = async (username: string): Promise<IUserId[]> => {
  const [userId] = await connection.execute(`SELECT id FROM Trybesmith.Users
    WHERE username=?;`, [username]);
  return userId as IUserId[];
};

export default {
  createUser,
  getUserId,
};