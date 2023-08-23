import { Col, Row } from "react-bootstrap";

import ProductCard from "components/ProductCard";

const ApparelsPage = () => {
  const apparels = [
    {
      name: "Overwatch T-Shirt",
      description: "D.va T-Shirt",
      price: "1000",
      image:
        "https://res.cloudinary.com/teepublic/image/private/s--dMSyEQV4--/t_Resized%20Artwork/c_crop,x_10,y_10/c_fit,w_400/c_crop,g_north_west,h_626,w_470,x_-35,y_0/g_north_west,u_upload:v1462829015:production:blanks:mtl53ofohwq5goqjo9ke,x_-430,y_-325/b_rgb:eeeeee/c_limit,f_auto,h_630,q_auto:good:420,w_630/v1564867614/production/designs/5502481_2.jpg",
    },
    {
      name: "Overwatch T-Shirt",
      description: "D.va T-Shirt",
      price: "1000",
      image:
        "https://res.cloudinary.com/teepublic/image/private/s--dMSyEQV4--/t_Resized%20Artwork/c_crop,x_10,y_10/c_fit,w_400/c_crop,g_north_west,h_626,w_470,x_-35,y_0/g_north_west,u_upload:v1462829015:production:blanks:mtl53ofohwq5goqjo9ke,x_-430,y_-325/b_rgb:eeeeee/c_limit,f_auto,h_630,q_auto:good:420,w_630/v1564867614/production/designs/5502481_2.jpg",
    },
    {
      name: "Overwatch T-Shirt",
      description: "D.va T-Shirt",
      price: "1000",
      image:
        "https://res.cloudinary.com/teepublic/image/private/s--dMSyEQV4--/t_Resized%20Artwork/c_crop,x_10,y_10/c_fit,w_400/c_crop,g_north_west,h_626,w_470,x_-35,y_0/g_north_west,u_upload:v1462829015:production:blanks:mtl53ofohwq5goqjo9ke,x_-430,y_-325/b_rgb:eeeeee/c_limit,f_auto,h_630,q_auto:good:420,w_630/v1564867614/production/designs/5502481_2.jpg",
    },
    {
      name: "Overwatch T-Shirt",
      description: "D.va T-Shirt",
      price: "1000",
      image:
        "https://res.cloudinary.com/teepublic/image/private/s--dMSyEQV4--/t_Resized%20Artwork/c_crop,x_10,y_10/c_fit,w_400/c_crop,g_north_west,h_626,w_470,x_-35,y_0/g_north_west,u_upload:v1462829015:production:blanks:mtl53ofohwq5goqjo9ke,x_-430,y_-325/b_rgb:eeeeee/c_limit,f_auto,h_630,q_auto:good:420,w_630/v1564867614/production/designs/5502481_2.jpg",
    },
    {
      name: "Overwatch T-Shirt",
      description: "D.va T-Shirt",
      price: "1000",
      image:
        "https://res.cloudinary.com/teepublic/image/private/s--dMSyEQV4--/t_Resized%20Artwork/c_crop,x_10,y_10/c_fit,w_400/c_crop,g_north_west,h_626,w_470,x_-35,y_0/g_north_west,u_upload:v1462829015:production:blanks:mtl53ofohwq5goqjo9ke,x_-430,y_-325/b_rgb:eeeeee/c_limit,f_auto,h_630,q_auto:good:420,w_630/v1564867614/production/designs/5502481_2.jpg",
    },
    {
      name: "Overwatch T-Shirt",
      description: "D.va T-Shirt",
      price: "1000",
      image:
        "https://res.cloudinary.com/teepublic/image/private/s--dMSyEQV4--/t_Resized%20Artwork/c_crop,x_10,y_10/c_fit,w_400/c_crop,g_north_west,h_626,w_470,x_-35,y_0/g_north_west,u_upload:v1462829015:production:blanks:mtl53ofohwq5goqjo9ke,x_-430,y_-325/b_rgb:eeeeee/c_limit,f_auto,h_630,q_auto:good:420,w_630/v1564867614/production/designs/5502481_2.jpg",
    },
    {
      name: "Overwatch T-Shirt",
      description: "D.va T-Shirt",
      price: "1000",
      image:
        "https://res.cloudinary.com/teepublic/image/private/s--dMSyEQV4--/t_Resized%20Artwork/c_crop,x_10,y_10/c_fit,w_400/c_crop,g_north_west,h_626,w_470,x_-35,y_0/g_north_west,u_upload:v1462829015:production:blanks:mtl53ofohwq5goqjo9ke,x_-430,y_-325/b_rgb:eeeeee/c_limit,f_auto,h_630,q_auto:good:420,w_630/v1564867614/production/designs/5502481_2.jpg",
    },
  ];

  return (
    <div className="mx-5 px-5">
      <Row xs={1} md={5} className="g-6">
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
