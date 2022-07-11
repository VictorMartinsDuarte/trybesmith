import modelProducts from '../models/modelProducts';

const getAll = async () => {
  const allProducts = await modelProducts.getAll();
  return allProducts;
};

export default {
  getAll,
};