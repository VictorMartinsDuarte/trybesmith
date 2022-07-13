import modelProducts from '../models/modelProducts';
import IProducts from '../interfaces/iProducts';

const getAll = async () => {
  const allProducts = await modelProducts.getAll();
  return allProducts;
};

const createProduct = async ({ name, amount }: IProducts) => {
  const newProduct = await modelProducts.createProduct({ name, amount });
  return newProduct;
};

export default {
  getAll,
  createProduct,
};