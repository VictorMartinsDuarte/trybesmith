interface IProducts {
  id?: number;
  name: string;
  amount: string;
  orderId: number | null;
}

export default IProducts;
export type ProdRegistered = Omit<IProducts, 'orderId'>;