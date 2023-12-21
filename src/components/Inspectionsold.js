import React from 'react';

const Inspectionsold = () => {
  const inspectionData = [
    { id: 1, name: 'John Doe', packages: 'Gold' },
    { id: 2, name: 'Jane Smith', packages: 'Silver' },
    { id: 3, name: 'Bob Johnson', packages: 'Platinum' },
    { id: 4, name: 'Alice Williams', packages: 'Gold' },
    { id: 5, name: 'Charlie Brown', packages: 'Silver' },
  ];

  return (
    <div className="container mt-4">
      <h2>Car Inspection Customers</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Package</th>
          </tr>
        </thead>
        <tbody>
          {inspectionData.map(({ id, name, packages }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{name}</td>
              <td>{packages}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Inspectionsold;
