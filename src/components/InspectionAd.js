import React from "react";
import "./inspectionAd.css";
import platinuminsp from "../Img/platinuminsp.jpg";
import goldinsp from "../Img/goldinsp.jpg";
import inspect from "../Img/inspect.png";
import { useInspectionContext } from "./InspectionContext"; 
import { Link } from "react-router-dom";

function InspectionAd() {
  const { setPackage } = useInspectionContext();

  const inspectionAdData = [
    {
      title: "Platinum Package",
      description: "An inspection team checks 200+ points of the car",
      img: platinuminsp,
      price: 39.99,
      adId:11,
    },
    {
      title: "Gold Package",
      description: "An inspection team checks the overall condition of the car",
      img: goldinsp,
      price: 39.99,
      adId:12,
    },
    {
      title: "Silver Package",
      description: "An inspection team checks the basic condition of the car",
      img: inspect,
      price: 39.99,
      adId:13,
    },
  ];

  const handleViewAd = (packageData) => {
    setPackage(packageData);
    // Add any additional logic or navigation if needed
  };

  return (
    <>
      {inspectionAdData.map((insp, index) => (
        <div key={index} className="col-md-4 carads">
          <div className="card inspection1">
            <img className="card-img-top3" src={insp.img} alt={`Card image ${index}`} />
            <div className="card-body">
              <h5 className="card-title">{insp.title} </h5>
              <p className="card-text">{insp.description}</p>
              <h5>{insp.price}</h5>
              <Link to={`/view-ad/${insp.adId}`} className="btn btn-primary">
                View AD
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default InspectionAd;
