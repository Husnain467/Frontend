import React, { createContext, useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Admin from "./Admin";
import ContactLeft from "./components/ContactLeft";
import CarAds from "./components/CarAds";
import Parts from "./components/PParts";
import InspectionAd from "./components/InspectionAd";
import Aboutus from "./components/Aboutus";
import CarAdmin from "./components/CarsAdmin";
import Navbar from "./components/Navbar";
import "./App.css";
import Carcomp from "./components/Carcomp";
import Ordercomp from "./components/Ordercomp";
import Inspectioncomp from "./components/Inspectioncomp";
import Civic from "./components/Civic";
import Home from "./components/Home";
import Caraddcomp from "./components/Caraddcomp";
import Logcomp from "./components/Logcomp";
import Prado from "./components/Prado";
import LandCruiser from "./components/Landcruiser";
import SparePartAds from "./components/SparepartAds";
import Carcareproducts from "./components/Carcareproducts";
import Tire from "./components/Tire";
import News from "./components/News";
import PlatinumPackage from "./components/PlatinumPackage";
import SilverPackage from "./components/SilverPackage";
import Checkout from "./components/Checkout";
import Cardelete from "./components/Cardelete";
import Additems from "./components/Additems";
import Settingcomp from "./components/Settingcomp";
import LoginForm from "./components/LoginForm";
import Sign from "./components/Sign";

export const item = createContext();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is authenticated in localStorage
    const auth = localStorage.getItem("auth");
    if (auth) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <>
      <item.Provider value={{ isLoggedIn }}>
        <Routes>
          {/* <Route path="/admin" element={<Admin />} /> */}
        </Routes>
        <div className="container-fluid">
          <div className="row row1">
            <Navbar />
          </div>
        </div>
        <div>
          {isLoggedIn ? (
            <Routes>
              {/* Render components after login */}
              {/* ... Your existing routes */}
              <Route path="*" element={<Home />} />
          <Route path="/home" element={<Home />} />
                    <Route path="/admin" element={<Admin />} />

          <Route path='/signup' element={<Sign/>}/>
          <Route path="/carcomp" element={<Carcomp />} />
          <Route path="/news" element={<News />} />
          <Route path="/ordercomp" element={<Ordercomp />} />
          <Route path="/inspectioncomp" element={<Inspectioncomp />} />
          <Route path="/contactus" element={<ContactLeft />} />
          <Route path="/view-ad/1" element={<Civic />} />
          <Route path="/view-ad/3" element={<LandCruiser />} />
          <Route path="/view-ad/2" element={<Prado />} />
          <Route path="/view-ad/11" element={<PlatinumPackage />} />
          <Route path="/view-ad/13" element={<SilverPackage />} />
          <Route path="/view-ad/7" element={<SparePartAds />} />
          <Route path="/view-ad/8" element={<Carcareproducts />} />
          <Route path="/view-ad/9" element={<Tire />} />
          <Route path="/settings" element={<Settingcomp />} />
          <Route path="/spare-parts" element={<Parts />} />
          <Route path="/Automobile-ads" element={<CarAds />} />
          <Route path="/Inspection-ad" element={<InspectionAd />} />
          <Route path="/CarAdmin" element={<CarAdmin />} />
          <Route path="/About-us" element={<Aboutus />} />
          <Route path="/Add-car" element={<Caraddcomp />} />
          <Route path="/Delete-car" element={<Cardelete />} />
          <Route path="/logout" element={<Logcomp />} />
          <Route path="/Additems" element={<Additems />} />
          <Route path="/cart" element={<Checkout/>}/>
            </Routes>
          ) : (
            <Routes>
              {/* Render login form */}
              <Route path="*" element={<LoginForm />} />
              <Route path="/signup" element={<Sign />} />
            </Routes>
          )}
        </div>
      </item.Provider>
    </>
  );
}

export default App;
