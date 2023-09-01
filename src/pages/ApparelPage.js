import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import axios from "axios";

import ProductCard from "components/ProductCard";

const ApparelsPage = () => {
  const [apparels, setApparel] = useState([]);

  React.useEffect(() => {
    axios.get("https://ecommerce-backend-iulr.onrender.com/apparel").then((results) => {
      const data = results.data;

      setApparel(data);
    });
  }, []);

  return (
    <div className="mx-5 my-3 px-5">
      <Row xs={1} md={5} className="g-5">
        {apparels.map((apparel, idx) => (
          <Col key={idx}>
            <ProductCard item={apparel} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ApparelsPage;
