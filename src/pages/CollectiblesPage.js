import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import axios from "axios";

import ProductCard from "components/ProductCard";

const CollectiblesPage = () => {
  const [collectibles, setCollectibles] = useState([]);
  React.useEffect(() => {
    axios.get("https://ecommerce-backend-iulr.onrender.com/collectibles").then((results) => {
      const data = results.data;

      setCollectibles(data);
    });
  }, []);
  return (
    <div className="mx-5 my-3 px-5">
      <Row xs={1} md={5} className="g-5">
        {collectibles.map((collectible, idx) => (
          <Col key={idx}>
            <ProductCard item={collectible} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CollectiblesPage;
