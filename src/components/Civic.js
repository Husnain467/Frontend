import React from 'react';
import reborn from "../Img/reborn.jpg";
import './civic.css'
const Civic= () => {
  const carDetails = {
    title: 'Honda Civic 2011',
    description: 'Honda Civic with excellent condition. Model year: 2011.',
    price: 12000,
    img: { reborn }.reborn,
    adid: '/view-ad/1',
  };

  return (
    <div className="row civic1">
      <div className='col-md-6'>
      <img className='img1' src={carDetails.img} alt={"..."} />
      </div>
      <div className='col-md-6 civic2'>
      <h2>{carDetails.title}</h2>
      <p>{carDetails.description}</p>
      <p>Price: ${carDetails.price}</p>
      <p>Phone Number: 123456789</p>
      <p>
        For more details: <a href={carDetails.adid}>Call</a>
      </p>
      </div>
    </div>
  );
};

export default Civic;
