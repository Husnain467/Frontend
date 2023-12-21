import "./admin.css";

import adminImg from "./Img/admin.png";
import Navbar from "./components/Navbar";
import AdminSideBar from "./components/AdminSideBar";
import Admincontent from "./components/Admincontent";
import AdminNavbar from "./AdminNavbar";


function Admin() {
  return (
    <>
    
      <div className="container-fluid">
      
        <div className="row row11 "style={{padding:"0",margin:"0"}}>
        <AdminNavbar/>
          <div className="col col-md-2">
          
            <div className="row row10" style={{marginTop:"10px"}}>
              <img className="admin-img" src={adminImg} alt="" />
              <h5>Admin Dashboard</h5>
            </div>
            
            <AdminSideBar />
            
          </div>
          <div className="col col-md-10">
            <Admincontent/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Admin;
