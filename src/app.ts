import express from 'express';
import products from './routes/routeProducts';
import users from './routes/routeUsers';
import orders from './routes/routeOrders';
import login from './routes/routeLogin';

const app = express();

app.use(express.json());

app.use('/products', products);
app.use('/users', users);
app.use('/orders', orders);
app.use('/login', login);

export default app;
