import express from 'express';
import products from './routes/routeProducts';
import users from './routes/routeUsers';
import orders from './routes/routeOrders';

const app = express();

app.use(express.json());

app.use('/products', products);
app.use('/users', users);
app.use('/orders', orders);

export default app;
