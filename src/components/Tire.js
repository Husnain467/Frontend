import React from "react";
import bridgestone from "../Img/bridgestone.png";
import michelin from "../Img/michelin.jpg";
import goodyear from "../Img/goodyear.jpg";
import { Button } from "react-bootstrap";
import './tire.css';

function Tire() {
  const tire = [
    {
      title: "Bridgestone",
      description: "High-performance tires for a smooth and safe driving experience.",
      img: bridgestone,
      price: 129.99,
      brandId: 1,
    },
    {
      title: "Michelin",
      description: "Premium tires known for durability and excellent traction.",
      img: michelin,
      price: 149.99,
      brandId: 2,
    },
    {
      title: "Goodyear",
      description: "Quality tires with a reputation for reliability and longevity.",
      img: goodyear,
      price: 119.99,
      brandId: 3,
    },
  ];

  return (
    <div className="container-fluid">
      {tire.map((brand) => (
        <div className="col tire-brands" key={brand.brandId}>
          <div className="card tire-brand">
            <img className="card-img-top4" src={brand.img} alt="" />
            <div className="card-body">
              <h5 className="card-title">{brand.title}</h5>
              <p className="card-text">{brand.description}</p>
              <h5>{brand.price}</h5>
              <Button className="btn btn-primary">
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Tire;
