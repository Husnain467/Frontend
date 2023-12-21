import { Link } from "react-router-dom";
import "./adminSideBar.css";
import React, { useState } from "react";
import { Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAd, faShoppingCart, faHeadset, faCog, faSignOutAlt,faSearch } from '@fortawesome/free-solid-svg-icons';

function AdminSideBar() {
  // const [isCarsOpen, setCarsOpen] = useState(false);
  // const [isOrdersOpen, setOrdersOpen] = useState(false);
  // const [isInspectionOpen, setInspectionOpen] = useState(false);
 

  // const toggleCars = () => {
  //   setCarsOpen(!isCarsOpen);
  //   setOrdersOpen(false);
  //   setInspectionOpen(false);
  // };

  // const toggleOrders = () => {
  //   setOrdersOpen(!isOrdersOpen);
  //   setCarsOpen(false);
  //   setInspectionOpen(false);
  // };

  // const toggleInspection = () => {
  //   setInspectionOpen(!isInspectionOpen);
  //   setCarsOpen(false);
  //   setOrdersOpen(false);
  // };

  return (
    <div className="admin-side-bar">
<Nav className="flex-column bg-dark p-3"style={{height:'100vh'}}>
 
      <Nav.Item>
      <Nav.Link href="#" className="text-white"style={{margin:"5%",borderBottom:'2px solid white'}}>
          <FontAwesomeIcon icon={faAd} className="mr-2" />
          <Link className="side-link" to="/Add-car"style={{textDecoration:"white",color:"white"}}>
          Advertisement
              </Link>
          
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#" className="text-white"style={{margin:"5%",borderBottom:'2px solid white'}}>
          <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
          <Link className="side-link" to="/Ordercomp"style={{textDecoration:"white",color:"white"}}>
                Orders
              </Link>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
          <Nav.Link href="#" className="text-white"style={{margin:"5%",borderBottom:'2px solid white'}}>
            <FontAwesomeIcon icon={faSearch} className="mr-2" />
              Inspection Service
          </Nav.Link>
        </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#" className="text-white"style={{margin:"5%",borderBottom:'2px solid white'}}>
          <FontAwesomeIcon icon={faHeadset} className="mr-2" />
          Customer Service
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#" className="text-white"style={{margin:"5%",borderBottom:'2px solid white'}}>
          <FontAwesomeIcon icon={faCog} className="mr-2" />
          <Link className="side-link" to="/Settings"style={{textDecoration:"white",color:"white"}}>
                Settings
              </Link>
        </Nav.Link>
      </Nav.Item>
     
      
      <Nav.Item className="mt-auto">
        <Nav.Link href="#" className="text-danger"style={{margin:"5%",borderBottom:'2px solid white'}}>
          <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
          <Link className="side-link" to="/Logcomp"style={{textDecoration:"white",color:"white"}}>
                Logout
              </Link>
        </Nav.Link>
      </Nav.Item>
      
    </Nav>



      {/* <ul className="list-group">
        <li className="list-group-item2 d-flex justify-content-between align-items-center">
          <div onClick={toggleCars}>
            <span>Cars</span>
            <i className={`fas   fa-chevron-${isCarsOpen ? 'up' : 'down'}`}></i>
          </div>

          {isCarsOpen && (
            <div className="    ">
              <Link className="side-link" to="/automobile-ads">
                View Car Ads
              </Link>
              <Link className="side-link" to="/Add-car">
                Add Car Ad
              </Link>
              <Link className="side-link" to="/carcomp">
                Update Car Ad
              </Link>
              <Link className="side-link" to="/Delete-car">
                Delete Car Ad
              </Link>
            </div>
          )}

          <span className="badge badge-primary badge-pill">14</span>
        </li>
        <li className="list-group-item2 d-flex justify-content-between align-items-center">
          <div onClick={toggleOrders}>
            <span>Orders</span>
            <i className={`fas fa-chevron-${isOrdersOpen ? 'up' : 'down'}`}></i>
          </div>

          {isOrdersOpen && (
            <div className="dropdown-content">
              <Link className="side-link" to="/Ordercomp">
                View Orders
              </Link>
              <Link className="side-link" to="/Add-car">
                Add Order
              </Link>
              <Link className="side-link" to="/carcomp">
                Update Orders
              </Link>
            </div>
          )}

          <span className="badge badge-primary badge-pill">2</span>
        </li>
        <li className="list-group-item2 d-flex justify-content-between align-items-center">
          <div onClick={toggleInspection}>
            <span>Inspection</span>
            <i className={`fas fa-chevron-${isInspectionOpen ? 'up' : 'down'}`}></i>
          </div>
          {isInspectionOpen && (
            <div className="dropdown-content">
              <Link className="side-link" to="/automobile-ads">
                View Inspections
              </Link>
              <Link className="side-link" to="/Add-car">
                Add Inspection Package
              </Link>
              <Link className="side-link" to="/carcomp">
                Update Package
              </Link>
            </div>
          )}

          <span className="badge badge-primary badge-pill">1</span>
        </li>
        <li className="list-group-item2 d-flex justify-content-between align-items-center">
          Customer Services
          <span className="badge badge-primary badge-pill"></span>
        </li>
        <li className="list-group-item2 d-flex justify-content-between align-items-center">
          <Link className="side-link" to="/Logout">
            Log out
          </Link>
          <span className="badge badge-primary badge-pill"></span>
        </li>
      </ul> */}
    </div>
  );
}

export default AdminSideBar;
