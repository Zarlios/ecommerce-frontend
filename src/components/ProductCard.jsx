import React from "react";

import { Card } from "react-bootstrap";
import ItemModal from "./ItemModal";

import styles from "./productCard.module.css";

const ProductCard = ({ item }) => {
  const { id, image, name, description, price } = item;

  return (
    <Card className={`m-2 ${styles.card}`} style={{ width: "18rem" }}>
      <div
        className="d-flex justify-content-center p-2"
        style={{ height: "24rem" }}
      >
        <Card.Img variant="top" src={image} className="object-fit-contain" />
      </div>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {description}
          <div className="d-flex justify-content-end fw-bold">${price.toFixed(2)}</div>
        </Card.Text>
        <div className="d-flex justify-content-center">
          <ItemModal item={item} />
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
