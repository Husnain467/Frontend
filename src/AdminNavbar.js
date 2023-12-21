import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl,Image } from 'react-bootstrap';
import { FaBell, FaUser,FaSearch } from 'react-icons/fa';



const AdminNavbar = () => {
  return (

    <Navbar bg="dark" variant="dark">
        <div className="container-fluid">
        <div className="col-md-8">
      <Navbar.Brand>Welcome, Admin!</Navbar.Brand>
      </div>
<div className="col-md-2">
      <Nav className="ml-auto">
        
        <Form inline>
        <div className="input-group" style={{ borderRadius: '20px', overflow: 'hidden' }}>
            <FormControl type="text" placeholder="Search" style={{ border: 'none', borderRadius: '20px 0 0 20px' }} />
            <div className="input-group-append" style={{ backgroundColor: 'white', borderRadius: '0 20px 20px 0' }}>
              <span className="input-group-text">
                <FaSearch />
              </span>
            </div>
          </div>
        </Form>
     
        <Nav.Link href="#notifications" className="mr-2">
          <FaBell size={20} />
        </Nav.Link>
        
      </Nav>
      </div> 
       <div className="col-md-2">
      <Nav className="mr-auto">
        <NavDropdown title={
          <div>
            <Image src="user-icon.jpg" roundedCircle style={{ width: '24px', height: '24px', marginRight: '5px' }} />
            John Doe
          </div>
        } id="basic-nav-dropdown">
          <NavDropdown.Item href="#profile">View Profile</NavDropdown.Item>
          <NavDropdown.Item href="#settings">Settings</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#logout">Logout</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      </div>
      </div>
    </Navbar>
  );
    }
    export default AdminNavbar;