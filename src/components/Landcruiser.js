import React from "react";
import cruiser from "../Img/cruiser.webp";
import './landcruiser.css' 

const LandCruiser = () => {
  const carDetails = {
    title: "Toyota Land Cruiser",
    description: "Brand new Toyota Land Cruiser with verified auction sheet",
    price: 39999, // Assuming the price is in dollars
    img: cruiser, // Replace with the actual image URL for Toyota Land Cruiser
    adid: "/view-ad/3", // Replace with the actual link to the detailed ad page
  };

  return (
    <div className="container-fluid">
      <div className="row landCruiser1">
        <div className="col-md-7">
          <img className="img3" src={carDetails.img} alt={"Toyota Land Cruiser"} />
        </div>
        <div className="col-md-5 landCruiser2">
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

export default LandCruiser;
