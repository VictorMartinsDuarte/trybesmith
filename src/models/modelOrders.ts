import { ResultSetHeader } from 'mysql2';
import IOrders, { IOrderId } from '../interfaces/iOrders';
import connection from './connection';

const getAll = async (): Promise<IOrders[]> => {
  const [orders] = await connection.execute(
    `SELECT Ord.id, Ord.userId, Pr.id as productsIds FROM Trybesmith.Orders AS Ord
    JOIN Trybesmith.Products AS Pr ON Ord.id = Pr.orderId;`,
  );
  return orders as IOrders[];
};

const createOrder = async (userId: number): Promise<IOrderId> => {
  const [response] = await connection
    .execute<ResultSetHeader>('INSERT INTO Trybesmith.Orders (userId) VALUES (?);', [userId]);
  const { insertId: id } = response;
  const orderId = { id };
  return orderId as IOrders;
};

export default {
  getAll,
  createOrder,
};