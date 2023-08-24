import { Col, Row } from "react-bootstrap";

import ProductCard from "components/ProductCard";

const CollectiblesPage = () => {
  const collectibles = [
    {
      name: "Funko Pop! Kiriko",
      description: "Funko Pop! Overwatch Kiriko Figurine",
      price: 1000,
      image:
        "https://m.media-amazon.com/images/I/716ASfk5ocL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    },
    {
      name: "Funko Pop! Sigma",
      description: "Funko Pop! Overwatch Sigma Figurine",
      price: 1000,
      image:
        "https://m.media-amazon.com/images/I/61ui2nxQkhL._AC_UL320_.jpg",
    },
    {
      name: "Funko Pop! Lucio",
      description: "Funko Pop! Overwatch Lucio Figurine",
      price: 1000,
      image:
        "https://m.media-amazon.com/images/I/61fjU-aZkdL._AC_UL320_.jpg",
    },
    {
      name: "Funko Pop! Winton",
      description: "Funko Pop! Overwatch Winton Figurine",
      price: 1000,
      image:
        "https://m.media-amazon.com/images/I/61uUMVRm00L._AC_UL320_.jpg",
    },
    {
      name: "Funko Pop! Echo",
      description: "Funko Pop! Overwatch Echo Figurine",
      price: 1000,
      image:
        "https://m.media-amazon.com/images/I/71ePRXBJ6BL._AC_UL320_.jpg",
    },
    {
      name: "Funko Pop! Cassady",
      description: "Funko Pop! Overwatch Cassady Figurine. Razorm recommended",
      price: 1000,
      image:
        "https://m.media-amazon.com/images/I/713k6RLINuL._AC_UL320_.jpg",
    },
    {
      name: "Funko Pop! Tracer",
      description: "Funko Pop! Overwatch Tracer Figurine",
      price: 1000,
      image:
        "https://m.media-amazon.com/images/I/71hxQSPUkNL._AC_UL320_.jpg",
    },
    {
      name: "Funko Pop! Reaper",
      description: "Funko Pop! Overwatch Reaper Figurine",
      price: 1000,
      image:
        "https://m.media-amazon.com/images/I/71SAW342k8L._AC_UL320_.jpg",
    },
    {
      name: "Funko Pop! Junker Queen",
      description: "Funko Pop! Overwatch Junker Queen Figurine",
      price: 1000,
      image:
        "https://m.media-amazon.com/images/I/61HynQVBi3L._AC_UL320_.jpg",
    },
    {
      name: "Funko Pop! Genji",
      description: "Funko Pop! Overwatch Genji Figurine. Lost Wonderer approved.",
      price: 1000,
      image:
        "https://m.media-amazon.com/images/I/71Y2y6l+iUL._AC_UL320_.jpg",
    },
  ];

  return (
    <div className="mx-5 px-5">
      <Row xs={1} md={5} className="g-6">
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
