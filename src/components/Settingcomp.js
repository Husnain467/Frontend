import React from 'react'
import adminImg from "../Img/admin.png";
import AdminSideBar from "./AdminSideBar";
import SettingsPage from './SettingsPage';


function Settingcomp () {
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
           
            <SettingsPage />
          </div>
        </div>
      </div>
    </>
  )
}
export default Settingcomp;