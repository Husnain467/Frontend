import "./parts.css";
import carcare from "../Img/carcare.jpg";
import parts from "../Img/parts.jpg";
import tyres from "../Img/tyres.jpg";
import { Link } from "react-router-dom";
function PParts() {
  const PParts = [
    {
      title: "Spare Parts",
      description: "All spare parts are available.",
      img: { parts }.parts,
      adid:7,
      
    },
    {
      title: "Carcare",
      description: "carcare products are available",
      img: { carcare }.carcare,
      adid:8,
    },
    {
      title: "Tyres",
      description: "Brand new tyres are available",
      img: { tyres }.tyres,
     adid:9,
    },
  ];
  return (
    <>
      {PParts.map((pt) => (
        <>
          <div className="col-md-4 carads">
            <div class="card carAd">
              <img class="card-img-top2" src={pt.img} alt=" " />
              <div class="card-body">
                <h5 class="card-title">{pt.title} </h5>
                <p class="card-text">{pt.description}</p>
                <h5>{pt.price}</h5>
                <Link to= {`/view-ad/${pt.adid}`}class="btn btn-primary">
                  View AD
                </Link>
              </div>
            </div>
          </div>
        </>
      ))}
    </>
  );
}
export default PParts;
