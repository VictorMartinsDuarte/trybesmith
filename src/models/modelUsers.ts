import { ResultSetHeader } from 'mysql2';
import iUsers from '../interfaces/iUsers';
import connection from './connection';

const createUser = async ({ username, classe, level, password }: iUsers): Promise<iUsers> => {
  const [inserted] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?);',
    [username, classe, level, password],
  );
  const { insertId: id } = inserted;
  const newUser: iUsers = { id, username, classe, level, password };
  return newUser;
};

export default {
  createUser,
};