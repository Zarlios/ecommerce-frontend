import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Modal } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import { removeFromCart } from "features/item/itemSlice";

import "./cartModal.css";

const CartModal = () => {
  const [show, setShow] = useState(false);
  const cartItems = useSelector((state) => state.item.cartItems);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
      <Button
        variant="link"
        active
        size="lg"
        className="text-light text-decoration-none"
        onClick={() => setShow(true)}
      >
        Cart
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="fullscreen-sm-end w-50 h-100 m-0 position-absolute end-0"
        aria-labelledby="cart-modal-title"
        contentClassName="rounded-0 border-0 h-100"
      >
        <Modal.Header closeButton>
          <Modal.Title id="cart-modal-title">Your Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
            {cartItems.map((item) => (
              <li className="d-flex justify-content-between my-1" key={item.id}>
                <div>
                  {item.name} - ${item.price}
                </div>
                <div>
                  <Button
                    variant="dark"
                    onClick={() => handleRemoveFromCart(item.id)}
                  >
                    <i className="fa-solid fa-trash-can"></i>
                  </Button>
                </div>
              </li>
            ))}
          </ul>
          <div className="total d-flex justify-content-end">
            <p className="mx-2 fw-bold">Total:</p> <p>{`$${total.toFixed(2)}`}</p>
          </div>
          <NavLink to="/checkout" onClick={() => setShow(false)}>Check Out</NavLink>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CartModal;
