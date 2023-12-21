import React from "react";
import inspect from "../Img/inspect.png";
import "./silver.css"; 

const SilverPackage = () => {
    const detail={
        phoneNumber: 123-456-7890,
    adid: '/view-ad/11',
  }
  return (
    <div className="silver-package">
      <h2>Silver Inspection Package</h2>
      <img src={inspect} alt="Silver Inspection" className="package-image" />
      <p>
        Our Silver Inspection Package is a comprehensive evaluation of your vehicle's critical components. An expert inspection
        team meticulously checks over 100 points of your car, focusing on key areas to ensure its overall condition. From the engine
        to the exterior, this package provides you with a detailed snapshot of your car's health.
      </p>
      <p>
        This package is suitable for those who desire a thorough examination of their car's essential elements. Whether you're
        preparing to buy or sell, the Silver Inspection Package offers valuable insights and peace of mind.
      </p>
      <p>
        Features of the Silver Package:
        <ul>
          <li>Inspection of over 100 points</li>
          <li>Detailed assessment of key components</li>
          <li>Professional evaluation by our skilled inspection team</li>
        </ul>
      </p>
      <p className="call-now">
        **Call Now to Schedule Your Silver Inspection:**
        <span className="phone-number">{detail.phoneNumber}</span>
      </p>
    </div>
  );
};

export default SilverPackage;
