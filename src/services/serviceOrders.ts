import modelOrders from '../models/modelOrders';
import { updateProduct } from '../models/modelProducts';
import modelUsers from '../models/modelUsers';
import { decodeToken } from '../utils/tokenJWT';

const getAll = async () => {
  const orders = await modelOrders.getAll();
  const allOrders = orders.map(({ id, userId, productsIds }) => ({
    id,
    userId,
    productsIds: [productsIds],
  }));
  return allOrders;
};

const createOrder = async (productsIds: number[], token: string) => {
  const decodedToken = await decodeToken(token);
  const { data } = decodedToken;
  const [order] = await modelUsers.getUserId(data);
  const orderId = await modelOrders.createOrder(order.id);
  await updateProduct(productsIds, orderId.id);
  const result = { userId: order.id, productsIds };
  return result;
};

export default {
  getAll,
  createOrder,
};