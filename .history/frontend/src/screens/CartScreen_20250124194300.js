import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {Row, Col, ListGroup, Image, Form, Button, Card} from 'react-bootstrap';
import {FaTrash} from 'react-icons/fa';
import Message from '../components/Message';

const CartScreen = () => {
  const navigate = useNavigate ();

  const dispatch = useDispatch ();

  return (
    <div>
      <h1>CartScreen</h1>
    </div>
  );
};

export default CartScreen;
