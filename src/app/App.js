import React from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "components/Navbar";
import Footer from "components/Footer";

import HomePage from "pages/HomePage";
import ApparelsPage from "pages/ApparelPage";
import CollectiblesPage from "pages/CollectiblesPage";
import CheckoutPage from "pages/CheckoutPage";
import PaymentPage from "pages/PaymentPage";

import "./app.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/apparel" element={<ApparelsPage />} />
        <Route path="/collectibles" element={<CollectiblesPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/payment-complete" element={<PaymentPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
