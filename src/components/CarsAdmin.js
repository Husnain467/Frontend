import React, { useState } from "react";
import {ListGroup, Button, Form } from "react-bootstrap";

function CarAdmin(){
    const CarAdmin = () => {
        const [cars, setCars] = useState([
          { id: 1, name: "Car A" },
          { id: 2, name: "Car B" },
          { id: 3, name: "Car C" },
        ]);
      
        const [newCar, setNewCar] = useState("");
      
        const handleAddCar = () => {
          if (newCar.trim() !== "") {
            setCars([...cars, { id: Date.now(), name: newCar }]);
            setNewCar("");
          }
        };
      
        const handleDeleteCar = (id) => {
          const updatedCars = cars.filter((car) => car.id !== id);
          setCars(updatedCars);
        };
      
        const handleUpdateCar = (id, newName) => {
          const updatedCars = cars.map((car) =>
            car.id === id ? { ...car, name: newName } : car
          );
          setCars(updatedCars);
        };
      
        return (
          <div className="Container">
            <div className="row">
              <div className="col-md-4">
                <h3 className="mt-4">Car List</h3>
                <ListGroup>
                  {cars.map((car) => (
                    <ListGroup.Item key={car.id} className="d-flex justify-content-between align-items-center">
                      {car.name}
                      <div>
                        <Button
                          variant="outline-danger"
                          size="sm"
                          onClick={() => handleDeleteCar(car.id)}
                        >
                          Delete
                        </Button>
                        <Form.Control
                          type="text"
                          size="sm"
                          placeholder="New Name"
                          className="ml-2"
                          onChange={(e) => handleUpdateCar(car.id, e.target.value)}
                        />
                      </div>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </div>
              <div className="col-md-4">
                <h3 className="col-md-4">Add Car</h3>
                <Form>
                  <Form.row>
                    <div className="col-md-8">
                      <Form.Control
                        type="text"
                        placeholder="Car Name"
                        value={newCar}
                        onChange={(e) => setNewCar(e.target.value)}
                      />
                    </div>
                    <div className="col-md-4">
                      <Button variant="primary" onClick={handleAddCar}>
                        Add
                      </Button>
                    </div>
                  </Form.row>
                </Form>
              </div>
            </div>
          </div>
        );
      };
    };
      export default CarAdmin;