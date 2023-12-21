import React from 'react'
import Carsold from './Carsold';
import adminImg from "../Img/admin.png";
import AdminSideBar from "./AdminSideBar";

function Carcomp () {
  return (
    <>
      <div className="container-fluid">
        <div className="row row11">
          <div className="col col-md-2">
            <div className="row row10">
              <img className="admin-img" src={adminImg} alt="" />
              <h5>Admin Dashboard</h5>
            </div>
            <AdminSideBar />
          </div>
          <div className="col col-md-10">
           
            <Carsold />
          </div>
        </div>
      </div>
    </>
  )
}
export default Carcomp;