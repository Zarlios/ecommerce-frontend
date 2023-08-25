import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "react-bootstrap";

import { removeFromCart } from "features/item/itemSlice";

const CheckoutPage = () => {
  const cartItems = useSelector((state) => state.item.cartItems);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="m-4">
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
    </div>
  );
};

export default CheckoutPage;
