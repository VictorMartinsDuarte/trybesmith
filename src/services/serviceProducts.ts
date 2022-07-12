import modelProducts from '../models/modelProducts';
import IProducts from '../interfaces/iProducts';

const getAll = async () => {
  const allProducts = await modelProducts.getAll();
  return allProducts;
};

const createProduct = async ({ name, amount }: IProducts) => {
  const newUser = await modelProducts.createProduct({ name, amount });
  return newUser;
};

export default {
  getAll,
  createProduct,
};