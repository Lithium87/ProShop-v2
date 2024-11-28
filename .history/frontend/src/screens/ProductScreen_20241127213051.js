import React from 'react';
import {Link} from 'react-router-dom';
import {useParams} from 'react-router-dom';
import {Row, Col, Image, ListGroup, Card, Button} from 'react-bootstrap';
import Rating from '../components/Rating';
import products from '../products';

const ProductScreen = () => {
  const {id: productId} = useParams ();
  console.log (typeof productId);
  const product = products.find (p => p._id === productId);
  console.log (products);
  console.log (product);

  return (
    <React.Fragment>
      <Link to="/" className="btn btn-light my-3">Go Back</Link>

      {/* <Row>
        <Col md={5}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={4}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={6} />
      </Row> */}
    </React.Fragment>
  );
};

export default ProductScreen;
