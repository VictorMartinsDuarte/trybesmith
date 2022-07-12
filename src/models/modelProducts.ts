import IProducts from '../interfaces/interfaceProducts';
import connection from './connection';

const getAll = async (): Promise<IProducts[]> => {
  const [products] = await connection.execute('SELECT * FROM Trybesmith.Products;');
  return products as IProducts[];
};

export default {
  getAll,
};