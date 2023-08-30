import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Modal, Col, Row } from "react-bootstrap";

import {
  addToCart,
  removeFromCart,
  setQuantity,
} from "features/item/itemSlice";

const ItemModal = ({ item }) => {
  console.log(item)
  const { _id, image, name, description, price } = item;

  const [show, setShow] = useState(false);
  const cartItem = useSelector((state) => state.item.cartItems).find(
    (item) => item._id === _id
  );
  const dispatch = useDispatch();

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(_id));
  };

  const handleAddToCart = () => dispatch(addToCart({ ...item, quantity: 1 }));

  const handleQuantity = (quantity) =>
    dispatch(setQuantity({ ...cartItem, quantity }));

  const increaseQuantity = () =>
    cartItem ? handleQuantity(cartItem.quantity + 1) : handleAddToCart();

  const decreaseQuantity = () => {
    if (cartItem) {
      if (cartItem.quantity - 1 === 0) {
        handleRemoveFromCart();
      } else {
        handleQuantity(cartItem.quantity - 1);
      }
    }
  };

  return (
    <>
      <Button variant="dark" active size="lg" onClick={() => setShow(true)}>
        Check it out!
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="m-0"
        aria-labelledby="cart-modal-title"
        contentClassName="rounded-0 border-0 h-100"
        fullscreen
      >
        <Modal.Header className="border-bottom-0" closeButton></Modal.Header>
        <Modal.Body className="d-flex justify-content-center">
          <Row className="p-5 w-75">
            <Col className="d-flex align-content-center justify-content-center h-50">
              <img src={image} className="rounded" alt="item image" />
            </Col>
            <Col className="h-50 border d-flex flex-column">
              <Row className="text-center p-1">
                <h1>{name}</h1>
              </Row>
              <Row className="p-1">
                <p>{description}</p>
              </Row>
              <Row className="mt-auto">
                <Row className="text-end p-1">
                  <p>Quantity: {cartItem ? cartItem.quantity : 0}</p>
                </Row>
                <Col className="text-end px-4">
                  <i
                    className="fa-solid fa-plus px-1"
                    role="button"
                    onClick={increaseQuantity}
                  />
                  <i
                    className="fa-solid fa-minus px-1"
                    role="button"
                    onClick={decreaseQuantity}
                  />
                </Col>
                <Row className="text-end p-1 fw-bold">
                  <p>Price: ${price.toFixed(2)}</p>
                </Row>
              </Row>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ItemModal;
