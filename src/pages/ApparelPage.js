import { Col, Row } from 'react-bootstrap';

import ProductCard from "components/ProductCard";

const ApparelsPage = () => {
  return (
    <Row xs={1} md={4} className="g-6">
      {Array.from({ length: 8 }).map((_, idx) => (
        <Col key={idx}>
          <ProductCard />
        </Col>
      ))}
    </Row>
  );
};

export default ApparelsPage;
