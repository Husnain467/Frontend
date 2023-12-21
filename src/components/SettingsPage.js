import React, { useState } from 'react';

const SettingsPage = () => {
  // State to manage form values
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    notification: true,
    theme: 'light',
  });

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    // If the input is a checkbox, use checked value; otherwise, use the input value
    const inputValue = type === 'checkbox' ? checked : value;

    setFormData({
      ...formData,
      [name]: inputValue,
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to update settings in the backend (API call, etc.)
    console.log('Settings updated:', formData);
  };

  return (
    <div className="container mt-4">
      <h2>Settings</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            className="form-control"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="notification"
            name="notification"
            checked={formData.notification}
            onChange={handleInputChange}
          />
          <label className="form-check-label" htmlFor="notification">Receive Notifications</label>
        </div>
        <div className="form-group">
          <label htmlFor="theme">Select Theme</label>
          <select
            className="form-control"
            id="theme"
            name="theme"
            value={formData.theme}
            onChange={handleInputChange}
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Save Settings</button>
      </form>
    </div>
  );
};

export default SettingsPage;
