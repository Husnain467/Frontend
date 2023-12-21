import React, { useEffect, useState } from 'react';
import { addItem, getItems, deleteItem, updateItem } from '../Service/api';

const Addcar = () => {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: 0,
    admprice: 0,
    image: '',
  });

  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const items = await getItems();
      setData(items);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleAddItem = async () => {
    try {
      await addItem(formData);
      fetchData();
      resetForm();
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  const handleDeleteItem = async (itemId) => {
    try {
      await deleteItem(itemId);
      fetchData();
    } catch (error) {
      console.error('Error deleting item:', error.message);
    }
  };

  const handleUpdateItem = (item) => {
    setSelectedItem(item);
    setFormData({
      name: item.name,
      description: item.description,
      price: item.price,
      admprice: item.admprice,
      image: item.image,
    });
  };

  const handleSaveUpdate = async () => {
    try {
      await updateItem(selectedItem._id, formData);
      fetchData();
      resetForm();
      setSelectedItem(null);
    } catch (error) {
      console.error('Error updating item:', error.message);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = () => {
    setFormData({
      name: '',
      description: '',
      price: 0,
      admprice: 0,
      image: '',
    });
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '900px', marginLeft: '10px', padding: '20px' }}>
      <div style={{ width: '150%', border: '1px solid #ccc', borderRadius: '8px' }}>
        <h1 style={{ textAlign: 'center', backgroundColor: 'rgb(23, 23, 88)', color: 'white' }}>Car Advertisement Management</h1>
        <form>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Name:</label>
            <input type="text" name="name" value={formData.name} onChange={handleInputChange} style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }} />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Description:</label>
            <textarea name="description" value={formData.description} onChange={handleInputChange} style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }} />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Price:</label>
            <input type="number" name="price" value={formData.price} onChange={handleInputChange} style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }} />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Bought Price:</label>
            <input type="number" name="admprice" value={formData.admprice} onChange={handleInputChange} style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }} />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Image (URL):</label>
            <input type="text" name="image" onChange={handleInputChange} style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }} />
          </div>
          <div style={{ textAlign: 'center' }}>
            <button type="button" onClick={handleAddItem} style={{ width: '100%', padding: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Add Item</button>
          </div>
        </form>
      </div>
      <div style={{ width: '100%' }}>
        <ul style={{ listStyle: 'none', padding: '0' }}>
          {data.map((item) => (
            <li
              key={item._id}
              style={{
                border: '1px solid #ccc',
                padding: '10px',
                borderRadius: '4px',
                marginTop: '15px',
                position: 'relative',
              }}
            >
              <div>
                <strong>Name:</strong> {item.name}
              </div>
              <div>
                <strong>Description:</strong> {item.description}
              </div>
              <div>
                <strong>Price:</strong> {item.price}
              </div>
              <div>
                <strong>Image:</strong>
                {item.image ? (
                  <img src={item.image} alt="Item" style={{ maxWidth: '100%', height: 'auto', marginTop: '10px' }} />
                ) : (
                  'No image available'
                )}
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                <button onClick={() => handleUpdateItem(item)}>Update</button>
                <button onClick={() => handleDeleteItem(item._id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {selectedItem && (
        <div style={{ width:'100%', border: '1px solid #ccc', borderRadius: '8px', padding: '15px', marginTop: '20px' }}>
          <h2 style={{ textAlign: 'center' }}>Update Item</h2>
          <form>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px' }}>Name:</label>
              <input type="text" name="name" value={formData.name} onChange={handleInputChange} style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }} />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px' }}>Description:</label>
              <textarea name="description" value={formData.description} onChange={handleInputChange} style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }} />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px' }}>Price:</label>
              <input type="number" name="price" value={formData.price} onChange={handleInputChange} style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }} />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px' }}>Bought Price:</label>
              <input type="number" name="admprice" value={formData.admprice} onChange={handleInputChange} style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }} />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px' }}>Image (URL):</label>
              <input type="text" name="image" onChange={handleInputChange} style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }} />
            </div>
            <div style={{ textAlign: 'center' }}>
              <button type="button" onClick={handleSaveUpdate} style={{ width: '100%', padding: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Save Update</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Addcar;
