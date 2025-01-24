import React from 'react';
import {Link} from 'react-router-dom';
import {Badge, Navbar, Nav, Container} from 'react-bootstrap';
import {UseSelector} from 'react-redux';
import {FaShoppingCart, FaUser} from 'react-icons/fa';

const Header = () => {
  const {cartItems} = useSelector (state => state.cart);

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand as={Link} to="/">ProShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/cart">
                <FaShoppingCart /> Cart
                {cartItems.length > 0 &&
                  <Badge
                    bg="success"
                    className="ms-1"
                    pill
                    style={{
                      marginLeft: '5px',
                    }}
                  >
                    {cartItems.reduce ((acc, item) => acc + item.qty, 0)}
                  </Badge>}
              </Nav.Link>
              <Nav.Link as={Link} to="/login"><FaUser /> Sign In</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
