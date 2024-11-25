import React from 'react';
import {Card} from 'react-bootstrap';
import products from '../../../.history/frontend/src/products_20241125184300';

const Product = ({product}) => {
  return (
    <Card className="my-3 p-3 rounded">
      <a href={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
        <Card.Body>
          <a href={`/product/${product._id}`}>
            <Card.Title as="div">
              <strong>{product.name}</strong>
            </Card.Title>
          </a>
          <Card.Text as="h3">
            ${product.price}
          </Card.Text>
        </Card.Body>
      </a>
    </Card>
  );
};

export default Product;
