import React from 'react';

const Carsold = () => {
  const carsData = [
    { id: 1, name: 'Toyota Camry', price: '$25,000', year: 2022, seller: 'John Doe' },
    { id: 2, name: 'Honda Accord', price: '$23,500', year: 2021, seller: 'Jane Smith' },
    { id: 3, name: 'Chevrolet Malibu', price: '$22,800', year: 2022, seller: 'Bob Johnson' },
    { id: 4, name: 'Ford Fusion', price: '$24,000', year: 2020, seller: 'Alice Williams' },
    { id: 5, name: 'Nissan Altima', price: '$23,200', year: 2021, seller: 'Charlie Davis' },
  ];

  return (
    <div className="container mt-5">
      <h2>Sold Cars</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Car Name</th>
            <th scope="col">Price</th>
            <th scope="col">Year</th>
            <th scope="col">Seller</th>
          </tr>
        </thead>
        <tbody>
          {carsData.map((car) => (
            <tr key={car.id}>
              <th scope="row">{car.id}</th>
              <td>{car.name}</td>
              <td>{car.price}</td>
              <td>{car.year}</td>
              <td>{car.seller}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default Carsold;