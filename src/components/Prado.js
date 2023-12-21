import React from "react";
import prado from "../Img/prado.webp";
import "./prado.css";

const Prado = () => {
  const carDetails = {
    title: "Toyota Prado 2015",
    description: "Toyota Prado in excellent condition. Model year: 2015.",
    price: 25000, // Assuming the price is in dollars
    img: { prado }.prado, // Replace with the actual image URL for Toyota Prado
    adid: "/view-ad/2", // Replace with the actual link to the detailed ad page
  };

  return (
    <div className="container-fluid">
    <div className="row prado1">
      <div className="col-md-7">
        <img className="img2" src={carDetails.img} alt={"Toyota Prado"} />
      </div>
      <div className="col-md-5 prado2">
        <h2>{carDetails.title}</h2>
        <p>{carDetails.description}</p>
        <p>Price: ${carDetails.price}</p>
        <p>Phone Number: 123456789</p>
        <p>
          For more details: <a href={carDetails.adid}>Call</a>
        </p>
      </div>
    </div>
    </div>
  );
};

export default Prado;
