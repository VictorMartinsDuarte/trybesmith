import { ResultSetHeader } from 'mysql2';
import IProducts from '../interfaces/iProducts';
import connection from './connection';

const getAll = async (): Promise<IProducts[]> => {
  const [products] = await connection.execute('SELECT * FROM Trybesmith.Products;');
  return products as IProducts[];
};

const createProduct = async ({ name, amount }: IProducts): Promise<IProducts> => {
  const [inserted] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?);',
    [name, amount],
  );
  const { insertId: id } = inserted;
  const newProduct: IProducts = { id, name, amount };
  return newProduct;
};

const updateProduct = async (productsIds: number[], orderId: number): Promise<void> => {
  productsIds.forEach(async (id) => {
    await connection.execute('UPDATE Trybesmith.Products SET orderId=? WHERE id=?;', [orderId, id]);
  });
};

export { updateProduct };
export default {
  getAll,
  createProduct,
};