import express from 'express';
import dotenv from 'dotenv';
dotenv.config ();
import connectDB from './config/db.js';
import products from './data/products.js';

connectDB (); // Connect to MongoDB

const port = process.env.PORT || 5000;

const app = express ();

app.get ('/', (req, res) => {
  res.send ('API is running...');
});

app.listen (port, () => console.log (`Server is running on port ${port}`));
