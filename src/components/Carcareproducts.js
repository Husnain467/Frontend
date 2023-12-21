import React from "react";
import waxPolish from "../Img/waxpolish.webp";
import microfiberCloth from "../Img/microfiber.webp";
import tireCleaner from "../Img/tyrecleaner.jpg";
import { Button } from "react-bootstrap";
import './carcare.css';

function Carcareproducts() {
  const Carcareproducts = [
    {
      title: "Wax Polish",
      description: "Premium wax polish for a glossy and protective shine on your car.",
      img: waxPolish,
      price: 24.99,
      productId: 1,
    },
    {
      title: "Microfiber Cloth",
      description: "High-quality microfiber cloth for streak-free cleaning and polishing.",
      img: microfiberCloth,
      price: 8.99,
      productId: 2,
    },
    {
      title: "Tire Cleaner",
      description: "Powerful tire cleaner to give your tires a new and clean look.",
      img: tireCleaner,
      price: 14.99,
      productId: 3,
    },
  ];

  return (
    <div className="container-fluid">
      {Carcareproducts.map((product) => (
        <div className="col carcare-products" key={product.productId}>
          <div className="card carcare-product">
            <img className="card-img-top3" src={product.img} alt="" />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">{product.description}</p>
              <h5>{product.price}</h5>
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

export default Carcareproducts;
