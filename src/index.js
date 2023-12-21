import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import App from "./App";
import { BrowserRouter as Router  } from "react-router-dom";
import { CarAdsProvider } from "./components/CarAdsContext";
import { SparePartProvider } from "./components/partscontext";
import { InspectionProvider } from "./components/InspectionContext";
import { GoogleOAuthProvider } from '@react-oauth/google';
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <CarAdsProvider>
      <SparePartProvider>
         <InspectionProvider>
     <Router>
      <GoogleOAuthProvider clientId="681686734823-pucksjqimeagsd85ejaujp815f077rmo.apps.googleusercontent.com">
  <App />
  </GoogleOAuthProvider>
 </Router>
 </InspectionProvider>
 </SparePartProvider>
    </CarAdsProvider> 
 
);