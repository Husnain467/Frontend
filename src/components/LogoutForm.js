import React, { useState } from "react";

const LogoutForm = () => {
  const [isLoggedIn, setLoggedIn] = useState(true);

  const handleLogout = () => {
    // You would typically implement your logout logic here
    // For this example, we'll just toggle the login state
    setLoggedIn(false);
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h2>Welcome, User!</h2>
          <p>You are currently logged in.</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h2>Logged Out</h2>
          <p>You have been successfully logged out.</p>
        </div>
      )}
    </div>
  );
};

export default LogoutForm;
