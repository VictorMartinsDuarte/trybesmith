import IOrders from '../interfaces/iOrders';
import connection from './connection';

const getAll = async (): Promise<IOrders[]> => {
  const [orders] = await connection.execute(
    `SELECT Ord.id, Ord.userId, Pr.id as productsIds FROM Trybesmith.Orders AS Ord
    JOIN Trybesmith.Products AS Pr ON Ord.id = Pr.orderId;`,
  );
  return orders as IOrders[];
};

export default {
  getAll,
};