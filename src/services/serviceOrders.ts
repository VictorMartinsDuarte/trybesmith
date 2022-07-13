import modelOrders from '../models/modelOrders';

const getAll = async () => {
  const orders = await modelOrders.getAll();
  const allOrders = orders.map(({ id, userId, productsIds }) => ({
    id,
    userId,
    productsIds: [productsIds],
  }));
  return allOrders;
};

export default {
  getAll,
};