import asyncHandler from '../middleware/asyncHandler.js';
import Product from '../models/productModel.js';

const getProducts = asyncHandler (async (req, res) => {
  const products = await Product.find ({});
  res.json (products);
});

const getProductsById = asyncHandler (async (req, res) => {
  const product = await Product.findById (req.params.id);

  if (product) {
    return res.json (product);
  } else {
    res.status (404);
    throw new Error ('Product Not Found!');
  }
});

export {getProducts, getProductsById};
