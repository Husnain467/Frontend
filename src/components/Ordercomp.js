import React from 'react'
import Partsold from"./Partsold";
import adminImg from "../Img/admin.png";
import AdminSideBar from "./AdminSideBar";


function Ordercomp () {
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
          </div >
          <div className="col col-md-10">
           
            <Partsold />
          </div>
        </div>
      </div>
    </>
  )
}
export default Ordercomp;