import Products from '../interfaces/interfaceProducts';
import connection from './connection';

const getAll = async (): Promise<Products[]> => {
  const [products] = await connection.execute('SELECT * FROM Trybesmith.Products;');
  return products as Products[];
};

export default {
  getAll,
};