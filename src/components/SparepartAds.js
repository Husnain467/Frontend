import React, { useContext } from "react";

import { useSparePartContext } from "./partscontext";
import parts from "../Img/parts.jpg";
import { Link } from "react-router-dom";
import { item } from "../App";
function SparePartAds() {
  const {s,vs}=useContext(item)
  const { addToCart } = useSparePartContext();
  const listcart=()=>{
    vs(s+1)
  }
  const spareParts = [
    {
      adId: 1,
      title: "Engine Oil Filter",
      description: "High-quality engine oil filter for optimal engine performance.",
      img: parts,
      price: 19.99,
    },
   
  ];

  return (
    <div className="Container-fluid">
      {spareParts.map((sparePart) => (
        <div className="col spare-part-ads" key={sparePart.adId}>
          <div className="card spare-part-ad">
            <img className="card-img-top2" src={sparePart.img} alt="" style={{height:"50vh",width:"50vh"}}/>
            <div className="card-body">
              <h5 className="card-title">{sparePart.title}</h5>
              <p className="card-text">{sparePart.description}</p>
              <h5>{sparePart.price}</h5>
              <Link to={"/cart"}
                className="btn btn-primary"
                onClick={listcart}
              >
                Add to Cart
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SparePartAds;
