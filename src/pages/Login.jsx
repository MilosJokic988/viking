import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  
  const handleLogin = (e) => {
    e.preventDefault();

   
    const storedUser = JSON.parse(localStorage.getItem('user')); 
    if (!storedUser) {
      setError('No user found! Please register first.');
      return;
    }

    if (storedUser.email === email && storedUser.password === password) {
      localStorage.setItem('isAuthenticated', true); 
      navigate('/'); 
    } else {
      setError('Invalid credentials!'); 
    }
  };

  return (
    <Container className="register-container">
      <h2 className="mb-4 text-center">Login to Viking Saga</h2>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        {error && <p className="text-danger">{error}</p>}

        <Button variant="danger" type="submit" className="btn">
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
