import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "features/item/itemSlice";
import { v4 as uuidv4 } from "uuid";

import { Button, Card } from "react-bootstrap";

const ProductCard = (props) => {
  let { item } = props;
  const { image, name, description, price } = item;

  let id = uuidv4();
  item = { id, image, name, description, price };

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(item));
  };

  return (
    <Card className="m-2" style={{ width: "18rem" }}>
      <div className="d-flex justify-content-center p-2" style={{ height: "24rem"}}>
        <Card.Img
          variant="top"
          src={image}
          className="object-fit-contain"
        />
      </div>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <p>{description}</p>
          <p className="d-flex justify-content-end fw-bold">${price}</p>
        </Card.Text>
        <div className="d-flex justify-content-center">
          <Button variant="primary" onClick={handleAddToCart}>
            Add to cart
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
