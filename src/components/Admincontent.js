import "./admincontent.css";
import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faShoppingCart, faToolbox, faAd } from '@fortawesome/free-solid-svg-icons';
function Admincontent() {

  return (
    <>
    <div className="container"style={{marginTop:"25px",marginBottom:"25px",borderBottom:"2px solid black"}}>
      <h1 >Welcome Admin</h1>
    </div>
      <div className="container">
      <div className="row">
        <div className="col-md-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                <FontAwesomeIcon icon={faUsers} className="mr-2" />
                Customers
              </h5>
              <h6 className="card-subtitle mb-2 text-muted">Total Customers</h6>
              <Link to="#" className="card-link">
                Customer Details
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
                Orders
              </h5>
              <h6 className="card-subtitle mb-2 text-muted">Total Orders</h6>
              <Link to="#" className="card-link">
                Order Details
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                <FontAwesomeIcon icon={faToolbox} className="mr-2" />
                Parts
              </h5>
              <h6 className="card-subtitle mb-2 text-muted">Total Parts</h6>
              <Link to='/Ordercomp' className="card-link">
                Spare Parts
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                <FontAwesomeIcon icon={faAd} className="mr-2" />
                Advertisement
              </h5>
              <h6 className="card-subtitle mb-2 text-muted">Total Ads</h6>
              <Link to='/Carcomp' className="card-link">
                Automobile Ads
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>

      

{
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-12">
          <h2>Top 5 Customers</h2>
          <div className="table-responsive">
            <div className="card">
              <div className="card-body">
                <div className="row font-weight-bold">
                  <div className="col-md-1 Admin_col_1">ID</div>
                  <div className="col Admin_table">Name</div>
                  <div className="col Admin_table">Email</div>
                  <div className="col Admin_table">Phone</div>
                  <div className="col Admin_table">Address</div>
                </div>
                {/* Customer 1 */}

                <div className="row">
                  <div className="col-md-1 Admin_col_1">1</div>
                  <div className="col Admin_table">John Doe</div>
                  <div className="col Admin_table">john@example.com</div>
                  <div className="col Admin_table">(555) 123-4567</div>
                  <div className="col Admin_table">123 Main St, Cityville</div>
                </div>
                {/* Customer 2 */}
                <div className="row">
                  <div className="col-md-1 Admin_col_1">2</div>
                  <div className="col Admin_table">Jane Smith</div>
                  <div className="col Admin_table">jane@example.com</div>
                  <div className="col Admin_table">(555) 987-6543</div>
                  <div className="col Admin_table">456 Oak St, Townsville</div>
                </div>
                {/* Customer 3 */}
                <div className="row">
                  <div className="col-md-1 Admin_col_1">3</div>
                  <div className="col Admin_table">Mike Johnson</div>
                  <div className="col Admin_table">mike@example.com</div>
                  <div className="col Admin_table">(555) 789-0123</div>
                  <div className="col Admin_table">789 Pine St, Villagetown</div>
                </div>
                {/* Customer 4 */}
                <div className="row">
                  <div className="col-md-1 Admin_col_1">4</div>
                  <div className="col Admin_table">Alice Williams</div>
                  <div className="col Admin_table">alice@example.com</div>
                  <div className="col Admin_table">(555) 234-5678</div>
                  <div className="col Admin_table">234 Cedar St, Hamletville</div>
                </div>
                {/* Customer 5 */}
                <div className="row">
                  <div className="col-md-1 Admin_col_1">5</div>
                  <div className="col Admin_table">Bob Miller</div>
                  <div className="col Admin_table">bob@example.com</div>
                  <div className="col Admin_table">(555) 345-6789</div>
                  <div className="col Admin_table">567 Birch St, Countryside</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

}
<div className="container mt-4">
      <div className="row">
        <div className="col-md-12">
          <h2>Order Table</h2>
          <div className="table-responsive">
            <div className="card">
              <div className="card-body">
                <div className="row font-weight-bold">
                  <div className="col-md-1 Admin_col_1">Order ID</div>
                  <div className="col Admin_table">Product</div>
                  <div className="col Admin_table">Quantity</div>
                  <div className="col Admin_table">Total Price</div>
                  <div className="col Admin_table">Status</div>
                </div>
                {/* Order 1 */}
                <div className="row">
                  <div className="col-md-1 Admin_col_1">101</div>
                  <div className="col Admin_table">Laptop</div>
                  <div className="col Admin_table">2</div>
                  <div className="col Admin_table">$2000</div>
                  <div className="col Admin_table">Shipped</div>
                </div>
                {/* Order 2 */}
                <div className="row">
                  <div className="col-md-1 Admin_col_1">102</div>
                  <div className="col Admin_table">Smartphone</div>
                  <div className="col Admin_table">1</div>
                  <div className="col Admin_table">$800</div>
                  <div className="col Admin_table">Pending</div>
                </div>
                {/* Order 3 */}
                <div className="row">
                  <div className="col-md-1 Admin_col_1">103</div>
                  <div className="col Admin_table">Camera</div>
                  <div className="col Admin_table">3</div>
                  <div className="col Admin_table">$1500</div>
                  <div className="col Admin_table">Delivered</div>
                </div>
                {/* Order 4 */}
                <div className="row">
                  <div className="col-md-1 Admin_col_1">104</div>
                  <div className="col Admin_table">Headphones</div>
                  <div className="col Admin_table">1</div>
                  <div className="col Admin_table">$100</div>
                  <div className="col Admin_table">Shipped</div>
                </div>
                {/* Order 5 */}
                <div className="row">
                  <div className="col-md-1 Admin_col_1">105</div>
                  <div className="col Admin_table">Tablet</div>
                  <div className="col Admin_table">2</div>
                  <div className="col Admin_table">$1200</div>
                  <div className="col Admin_table">Delivered</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


 

    </>
  );
}
export default Admincontent;
