import React from "react";
import { Link } from "react-router-dom";
import { Card, Col } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
 



const Item = ({ product, setProducts }) => {
  const handleMouseEnter = () => {
    setProducts((prevProducts) =>
      prevProducts.map((prevProduct) =>
        prevProduct.id === product.id
          ? { ...prevProduct, isHovered: true }
          : prevProduct
      )
    );
  };

  const handleMouseLeave = () => {
    setProducts((prevProducts) =>
      prevProducts.map((prevProduct) =>
        prevProduct.id === product.id
          ? { ...prevProduct, isHovered: false }
          : prevProduct
      )
    );
  };

  

  return (
 
    <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
      <Card
        className={`mb-4 shadow-sm customCard ${
          product.isHovered ? "hovered-card" : ""
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Link
          to={`/product/${product.id}`}
          className="text-decoration-none text-dark"
        >
          <Card.Img
            variant="top"
            src={product.Imagenes}
            alt={product.title}
            className="customImage"
          />
          <Card.Body>
            <Card.Title className="text-center">
              <strong>{product.title}</strong>
            </Card.Title>
            <Card.Text className="text-center text-muted fs-5">
              ${product.price}
            </Card.Text>
          </Card.Body>
        </Link>
      </Card>
    </Col>
  );
};

export default Item;
