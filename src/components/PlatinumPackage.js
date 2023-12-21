import React from "react";
import platinuminsp from "../Img/platinuminsp.jpg";
 import "./platinum.css"; // Add your own CSS file for styling    

const PlatinumPackage = () => {
  const detail={
   phoneNumber: 123-456-7890, // Replace with your actual phone number
  adid: '/view-ad/11',
  }
  return (
    <div className="platinum-package">
      <h2>Platinum Inspection Package</h2>
      <img src={platinuminsp} alt="Platinum Inspection" className="package-image" />
      <p>
        Our Platinum Inspection Package is the epitome of thoroughness. Our expert inspection team meticulously checks over
        200 points of your car to ensure that every aspect is in prime condition. From the engine to the exterior, we leave
        no stone unturned in providing you with a comprehensive report on the health of your vehicle.
      </p>
      <p>
        This package is perfect for those who demand the highest level of scrutiny for their car. Whether you are buying or
        selling, the Platinum Inspection Package gives you the confidence and peace of mind that comes with a detailed and
        exhaustive examination.
      </p>
      <p>
        Features of the Platinum Package:
        <ul>
          <li>Inspection of over 200 points</li>
          <li>Comprehensive report on the vehicle's condition</li>
          <li>Expert evaluation by our skilled inspection team</li>
        </ul>
      </p>
      <p className="call-now">
        **Call Now to Schedule Your Platinum Inspection:**
        <span className="phone-number">{detail.phoneNumber}</span>
      </p>
    </div>
  );
};

export default PlatinumPackage;
