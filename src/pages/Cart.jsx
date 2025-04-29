import React from 'react';
import { useCart } from '../context/CartContext';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../App.css';

const Cart = () => {
  const { cart, removeFromCart, getTotal } = useCart();

  return (
    <Container className="cart-container">
      <h1 className="text-center vikings-title">Viking Shopping Cart</h1>

      <Row>
        {cart.length === 0 ? (
          <p className="text-center vikings-message">Your cart is empty! Prepare for battle!</p>
        ) : (
          cart.map((product) => (
            <Col lg={6} className="cart-item" key={product.id}>
              <Card className="vikings-card">
                <Card.Body>
                  <Card.Title className="text-center vikings-product-name">{product.name}</Card.Title>
                  <p><strong>Price:</strong> {product.price}$</p>
                  <p><strong>Quantity:</strong> {product.quantity}</p>
                  <Button variant="danger" onClick={() => removeFromCart(product.id)} className="vikings-delete-btn">
                    Remove
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>

      {cart.length > 0 && (
        <>
          <p className="text-center vikings-total">Total: {getTotal()}$</p>
          <div className="d-flex justify-content-center mt-3">
            <Button as={Link} to="/checkout" variant="warning" size="lg" className="vikings-checkout-btn">
              Proceed to Checkout
            </Button>
          </div>
        </>
      )}
    </Container>
  );
};

export default Cart;
