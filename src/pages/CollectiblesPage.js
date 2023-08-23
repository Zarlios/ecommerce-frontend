import { Col, Row } from "react-bootstrap";

import ProductCard from "components/ProductCard";

const CollectiblesPage = () => {
  const collectibles = [
    {
      name: "Funko Pop! Kiriko",
      description: "Funko Pop! Overwatch Kiriko Figurine",
      price: "1000",
      image:
        "https://m.media-amazon.com/images/I/716ASfk5ocL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    },
    {
      name: "Funko Pop! Kiriko",
      description: "Funko Pop! Overwatch Kiriko Figurine",
      price: "1000",
      image:
        "https://m.media-amazon.com/images/I/716ASfk5ocL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    },
    {
      name: "Funko Pop! Kiriko",
      description: "Funko Pop! Overwatch Kiriko Figurine",
      price: "1000",
      image:
        "https://m.media-amazon.com/images/I/716ASfk5ocL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    },
    {
      name: "Funko Pop! Kiriko",
      description: "Funko Pop! Overwatch Kiriko Figurine",
      price: "1000",
      image:
        "https://m.media-amazon.com/images/I/716ASfk5ocL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    },
    {
      name: "Funko Pop! Kiriko",
      description: "Funko Pop! Overwatch Kiriko Figurine",
      price: "1000",
      image:
        "https://m.media-amazon.com/images/I/716ASfk5ocL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    },
    {
      name: "Funko Pop! Kiriko",
      description: "Funko Pop! Overwatch Kiriko Figurine",
      price: "1000",
      image:
        "https://m.media-amazon.com/images/I/716ASfk5ocL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    },
    {
      name: "Funko Pop! Kiriko",
      description: "Funko Pop! Overwatch Kiriko Figurine",
      price: "1000",
      image:
        "https://m.media-amazon.com/images/I/716ASfk5ocL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    },
    {
      name: "Funko Pop! Kiriko",
      description: "Funko Pop! Overwatch Kiriko Figurine",
      price: "1000",
      image:
        "https://m.media-amazon.com/images/I/716ASfk5ocL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    },
    {
      name: "Funko Pop! Kiriko",
      description: "Funko Pop! Overwatch Kiriko Figurine",
      price: "1000",
      image:
        "https://m.media-amazon.com/images/I/716ASfk5ocL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    },
    {
      name: "Funko Pop! Kiriko",
      description: "Funko Pop! Overwatch Kiriko Figurine",
      price: "1000",
      image:
        "https://m.media-amazon.com/images/I/716ASfk5ocL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    },
  ];

  return (
    <div className="mx-5 px-5">
      <Row xs={1} md={5} className="g-6">
        {collectibles.map((collectible, idx) => (
          <Col key={idx}>
            <ProductCard props={collectible} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CollectiblesPage;
