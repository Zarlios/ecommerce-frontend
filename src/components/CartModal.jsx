import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Modal } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import {
  removeFromCart,
  setQuantity,
} from "features/item/itemSlice";

import "./cartModal.css";

const CartModal = () => {
  const [show, setShow] = useState(false);
  const cartItems = useSelector((state) => state.item.cartItems);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const handleQuantity = (item, quantity) =>
    dispatch(setQuantity({ ...item, quantity }));

  const increaseQuantity = (item) => handleQuantity(item, item.quantity + 1);

  const decreaseQuantity = (item) =>
    item.quantity - 1 === 0
      ? handleRemoveFromCart(item._id)
      : handleQuantity(item, item.quantity - 1);

  const total = cartItems.reduce(
    (sum, { quantity, price }) => sum + quantity * price,
    0
  );

  return (
    <>
      <i
        className="fa-solid fa-cart-shopping fa-2xz"
        role="button"
        onClick={() => setShow(true)}
      />

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="fullscreen-sm-end w-50 h-100 m-0 position-absolute end-0 cart-modal-dialog"
        aria-labelledby="cart-modal-title"
        contentClassName="rounded-0 border-0 h-100"
      >
        <Modal.Header closeButton>
          <Modal.Title id="cart-modal-title">Your Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
            {cartItems.map((item) => (
              <li className="d-flex justify-content-between my-1" key={item._id}>
                <div>
                  {item.quantity}x - {item.name} - ${item.price * item.quantity}
                </div>
                <div>
                  <i
                    className="fa-solid fa-plus"
                    role="button"
                    onClick={() => increaseQuantity(item)}
                  />
                  <i
                    className="fa-solid fa-minus"
                    role="button"
                    onClick={() => decreaseQuantity(item)}
                  />
                  <i
                    className="fa-solid fa-trash-can"
                    role="button"
                    onClick={() => handleRemoveFromCart(item._id)}
                  />
                </div>
              </li>
            ))}
          </ul>
          <div className="total d-flex justify-content-end">
            <p className="mx-2 fw-bold">Total:</p>{" "}
            <p>{`$${total.toFixed(2)}`}</p>
          </div>
          <NavLink to="/checkout" onClick={() => setShow(false)}>
            Check Out
          </NavLink>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CartModal;
