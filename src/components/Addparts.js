import React, { useState, useEffect } from 'react';
import "./addcar.css"

const Addparts = () => {
  const [partName, setPartName] = useState('');
  const [partDescription, setPartDescription] = useState('');
  const [partsList, setPartsList] = useState([]);

  useEffect(() => {
   
    setPartsList([]);
  }, []);

  const handleAddPart = () => {
  
    const newPart = {
      name: partName,
      description: partDescription,
    };
    setPartsList([partsList, newPart]);

    setPartName('');
    setPartDescription('');
  };

  return (
    <div>
      <div className='container addpart'>
      <h2>Add Spare Parts</h2>
      <form>
        <label>
          Part Name:
          <input
            type="text"
            value={partName}
            onChange={(e) => setPartName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Part Description:
          <input
            type="text"
            value={partDescription}
            onChange={(e) => setPartDescription(e.target.value)}
          />
        </label>
        <br />
        <button type="button" onClick={handleAddPart}>
          Add Part
        </button>
      </form>
      </div>
      <div className='spare'>
      <h3>Spare Parts List:</h3>
      <ul>
        {partsList.map((part, index) => (
          <li key={index}>
            {part.name} - {part.description}
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default Addparts;
