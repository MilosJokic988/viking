import { useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../data/useFetch";
import Spinner from 'react-bootstrap/Spinner';
import { Breadcrumb, Button } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import { useCart } from "../context/CartContext";
import '../App.css';
import Footer from '../components/Footer'

const Products = () => {
  const { data, loading, error } = useFetch();
  const [currentPage, setCurrentPage] = useState(1);
  const poStranici = 3;

  const { addToCart, cart } = useCart();

  if (loading) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  if (error) return <div className="text-danger text-center mt-5">{error}</div>;

  const lastIndex = currentPage * poStranici;
  const firstIndex = lastIndex - poStranici;
  const currentItems = data.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(data.length / poStranici);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  
  const isInCart = (productId) => {
    return cart.some(item => item.id === productId);
  };

  return (
    <main>
      <div className="container mt-4">
        <div className="row justify-content-center align-items-center">
          <div className="text-center col-lg-6"></div>
          <div className="text-center col-lg-6">
          <Breadcrumb>
  <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
    Home
  </Breadcrumb.Item>
  <Breadcrumb.Item active>Products</Breadcrumb.Item>
</Breadcrumb>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row g-4">
          {currentItems.map((elem) => {
            const isProductInCart = isInCart(elem.id);

            return (
              <div className="col-lg-4 col-md-6" key={elem.id}>
                <Card
                  className={`product-card ${isProductInCart ? "in-cart" : ""}`}
                  style={{ width: '18rem' }}
                >
                  <Card.Img
                    variant="top"
                    src={new URL(elem.image, import.meta.url).href}
                    alt={elem.name}
                    style={{ maxHeight: "200px", objectFit: "contain" }}
                  />
                  <Card.Body>
                    <Card.Title>{elem.name}</Card.Title>
                    <Card.Text>{elem.details}</Card.Text>
                    <Button
                      variant={isProductInCart ? "secondary" : "primary"}
                      onClick={() => handleAddToCart(elem)}
                      disabled={isProductInCart} 
                    >
                      {isProductInCart ? "Added to Cart" : "Add to Cart"}
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
        {data.length > poStranici && (
          <div className="d-flex justify-content-between mt-4">
            {currentPage > 1 && (
              <Button onClick={() => setCurrentPage((prev) => prev - 1)}>
                Previous
              </Button>
            )}
            <span>
              Page {currentPage} of {totalPages}
            </span>
            {currentPage < totalPages && (
              <Button onClick={() => setCurrentPage((next) => next + 1)}>
                Next
              </Button>
            )}
          </div>
        )}
      </div>
      <Footer /> 
    </main>
  );
};

export default Products;
