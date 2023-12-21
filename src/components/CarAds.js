import { useCarAds } from "./CarAdsContext";
import { Link } from "react-router-dom";
import "./car.css"

function CarAds() {
  const { sdata } = useCarAds();
  
  return (
    <>
      {sdata.map((ad) => (
        <div key={ad.adId} className="col carads">
          <div className="card carAd">
            <img className="card-img-top1" src={ad.image} alt="" style={{height:'65%', width:'1005'}}/>
            <div className="card-body">
              <h5 className="card-title">{ad.name} </h5>
              <p className="card-text">{ad.description}</p>
              <h5>{ad.price}</h5>
              <Link to={`/view-ad/${ad.adId}`} className="btn btn-primary">
                View AD
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default CarAds;
