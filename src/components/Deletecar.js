import React from 'react';

const Deletecar = ({ carAds = [], onDeleteCar }) => {
  return (
    <>
      {carAds.map((ad) => (
        <div className="col carads" key={ad.id}>
          <div className="card carAd">
            {/* Existing card content */}
            <button
              className="btn btn-danger"
              onClick={() => onDeleteCar(ad.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Deletecar;


