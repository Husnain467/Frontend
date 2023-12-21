import React from 'react';

const Partsold = () => {
  const sparePartsData = [
    { id: 1, name: 'Engine Oil', price: 20.99, quantity: 50 },
    { id: 2, name: 'Air Filter', price: 5.99, quantity: 100 },
    { id: 3, name: 'Brake Pads', price: 15.99, quantity: 30 },
    { id: 4, name: 'Spark Plugs', price: 3.99, quantity: 80 },
    { id: 5, name: 'Oil Filter', price: 4.99, quantity: 60 },
  ];

  return (
    <div className="container mt-4">
      <h2>Spare Parts Inventory</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {sparePartsData.map((part) => (
            <tr key={part.id}>
              <td>{part.id}</td>
              <td>{part.name}</td>
              <td>${part.price.toFixed(2)}</td>
              <td>{part.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Partsold;
