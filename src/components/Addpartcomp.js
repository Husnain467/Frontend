import React from 'react'

import adminImg from "../Img/admin.png";
import AdminSideBar from "./AdminSideBar";
import Addcar from './Addcar';
import Addparts from './Addparts';

function Addpartcomp () {
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
           
            <Addparts/>
          </div>
        </div>
      </div>
    </>
  )
}
export default Addpartcomp;