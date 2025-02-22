import express from 'express';
import dotenv from 'dotenv';
dotenv.config ();
import connectDB from './config/db.js';
import {notFound, errorHandler} from './middleware/errorMiddleware.js';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';

connectDB (); // Connect to MongoDB

const port = process.env.PORT || 5000;

const app = express ();

app.get ('/', (req, res) => {
  res.send ('API is running...');
});

app.use ('/api/products', productRoutes);
app.use ('/api/users', userRoutes);

app.use (notFound);
app.use (errorHandler);

app.listen (port, () => console.log (`Server is running on port ${port}`));
