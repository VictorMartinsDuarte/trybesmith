import express from 'express';
import products from './routes/routeProducts';
import users from './routes/routeUsers';

const app = express();

app.use(express.json());

app.use('/products', products);
app.use('/users', users);

export default app;
