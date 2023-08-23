import { Button, Card } from "react-bootstrap";

const ProductCard = (props) => {
  const { item } = props;
  const { image, name, description, price } = item;
  return (
    <Card className="m-2" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <p>{description}</p>
          <p className="d-flex justify-content-end fw-bold">${price}</p>
        </Card.Text>
        <div className="d-flex justify-content-center">
          <Button variant="primary">
            Add to cart
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
