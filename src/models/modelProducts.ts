import { ResultSetHeader } from 'mysql2';
import IProducts from '../interfaces/iProducts';
import connection from './connection';

const getAll = async (): Promise<IProducts[]> => {
  const [products] = await connection.execute('SELECT * FROM Trybesmith.Products;');
  return products as IProducts[];
};

const createProduct = async (product: IProducts): Promise<IProducts> => {
  const { name, amount } = product;
  const [inserted] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Products (name, amout) VALUES (?, ?);',
    [name, amount],
  );
  const { insertId: id } = inserted;
  const newUser: IProducts = { id, name, amount };
  return newUser;
};

export default {
  getAll,
  createProduct,
};