import React from 'react'
import ContactRight from "./ContactRight";
import Carousel from "./Carousel";
import ContactLeft from "./ContactLeft";
import CarAds from "./CarAds";
import Parts from "./PParts";
import InspectionAd from "./InspectionAd";
import Aboutus from "./Aboutus";

function Home(){
  return (
    <div >
        <div className='container-fluid'>
        <div className="row row2">
          <Carousel />
        </div>
      </div>

      <div className="container-fluid">
        <div className="row row4">
          <h2>Automobile Ads</h2>
        </div>
        <div className="row row5">
          <CarAds/>
        </div>
      </div>
        <div className="container-fluid">
        <div className="row row4">
          <h2>Autocenter Parts</h2>
        </div>
        <div className="row row31">
          <Parts />
        </div>
      </div>
       <div className="container-fluid">
        <div className="row row4">
          <h2>Inspection Srevices</h2>
        </div>
        <div className="row row32">
          <InspectionAd />
        </div>
      </div> 
     <div className="container-fluid">
        <div className="row row6">
          <h1>Contact Us</h1>
        </div>
        <div className="row row7">
          <div className="col col-md-6">
            <ContactLeft />
          </div>
          <div className="col col-md-6">
            <ContactRight />
          </div>
          </div> 

          <div className="container-fluid">
        <div className="row row33">
          <h2>AutoCenter</h2>
        </div>
        <div className="row row34">
          <div>
          <Aboutus />
          </div>
        </div>
      </div> 
      </div>    
    </div>
  );
};
export default Home;