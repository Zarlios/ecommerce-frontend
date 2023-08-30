import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "react-bootstrap";

import { removeFromCart } from "features/item/itemSlice";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "../components/CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51Nj22eGhiPUUAYmAktieLrNWwUcz4Lcte2bqVxLWkk2VPwCuqO0PDrZy4heiH9BLZEwnpaHdoh9ar2RuRMcbguTL00K5aHZaCJ"
);

const CheckoutPage = () => {
  const [clientSecret, setClientSecret] = useState("");
  const cartItems = useSelector((state) => state.item.cartItems);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  useEffect(() => {
    if (cartItems) {
      // Create PaymentIntent as soon as the page loads
      fetch("http://localhost:4242/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cartItems),
      })
        .then((res) => res.json())
        .then((data) => setClientSecret(data.clientSecret));
    }
  }, []);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  const total = cartItems.reduce(
    (sum, { quantity, price }) => sum + quantity * price,
    0
  );

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
      <div className="App">
        {clientSecret && (
          <Elements options={options} stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        )}
      </div>
    </div>
  );
};

export default CheckoutPage;
