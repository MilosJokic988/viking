import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../App.css';

const Header = () => {
    const { getCartCount } = useCart();
    const cartCount = getCartCount();

    return (
        <Nav className="navbar" activeKey="/">
            <Nav.Item>
                <Nav.Link as={Link} to="/" className="nav-link">
                    Home
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} to="/history" className="nav-link">
                    History
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} to="/gods" className="nav-link">
                    Gods
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} to="/products" className="nav-link">
                    Products
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} to="/cart" className="nav-link">
                    Cart
                    <span className="cart-count">{isNaN(cartCount) ? 0 : cartCount}</span>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} to="/duel" className="nav-link">
                    Viking Duel
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} to="/register" className="nav-link">
                   Register
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} to="/login" className="nav-link">
                    Login
                </Nav.Link>
            </Nav.Item>
          
        </Nav>
    );
};

export default Header;

