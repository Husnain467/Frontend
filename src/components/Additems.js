import React, { useEffect, useState } from 'react';
import { addItem, getItems, deleteItem, updateItem } from '../Service/api';

const Additems = () => {
    const [data, setData] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: 0,
        admprice: 0,
        image: '',
    });
    const [showItems, setShowItems] = useState(false);
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
            setShowItems(true);
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
            setShowItems(false);
            setSelectedItem(null);
            setFormData({
                name: '',
                description: '',
                price: 0,
                admprice: 0,
                image: '',
            });
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

    return (
        <div className='container Additem' style={{ display: 'flex' }}>
            <div style={{ backgroundColor: "white", padding: "20px", border: "1px solid #ccc", borderRadius: "8px", width: "400px", marginLeft: "10px" }}>
                <h1>Add a Car Ad</h1>
                <div style={{ marginBottom: "10px" }}>
                    <div style={{ marginBottom: "10px" }}>
                        <label>Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
                        />
                    </div>
                    <div style={{ marginBottom: "10px" }}>
                        <label>Description:</label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                            style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
                        />
                    </div>
                    <div style={{ marginBottom: "10px" }}>
                        <label>Price:</label>
                        <input
                            type="number"
                            name="price"
                            value={formData.price}
                            onChange={handleInputChange}
                            style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
                        />
                    </div>
                    <div style={{ marginBottom: "10px" }}>
                        <label>Bought Price:</label>
                        <input
                            type="number"
                            name="admprice"
                            value={formData.admprice}
                            onChange={handleInputChange}
                            style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
                        />
                    </div>
                    <div style={{ marginBottom: "10px" }}>
                        <label>Image (URL):</label>
                        <input
                            type="text"
                            name="image"
                            onChange={handleInputChange}
                            style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
                        />
                    </div>
                </div>
                <button onClick={handleAddItem} style={{ width: "100%", padding: "10px", backgroundColor: "#4CAF50", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}>Add Item</button>
            </div>
            {showItems && (
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", marginLeft: "10px" }}>
                    {data.length > 0 ? (
                        <div style={{ backgroundColor: "white", padding: "20px", border: "1px solid #ccc", borderRadius: "8px", width: "600px", marginBottom: "10px" }}>
                            <h2>Advertisement List</h2>
                            <ul>
                                {data.map(item => (
                                    <li key={item._id} style={{ marginBottom: "10px" }}>
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
                                                <img src={item.image} alt="Item" style={{ width: "100%", maxWidth: "150px", height: "auto", marginTop: "10px" ,marginBottom:"20px"}} />
                                            ) : (
                                                "No image available"
                                            )}
                                        </div>
                                        <button style={{margin:"10px"}} onClick={() => handleUpdateItem(item)}>Update</button>
                                        <button style={{margin:"10px"}}onClick={() => handleDeleteItem(item._id)}>Delete</button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ) : (
                        <div style={{ backgroundColor: "white", padding: "20px", border: "1px solid #ccc", borderRadius: "8px", width: "600px", marginBottom: "10px" }}>
                            <p>No advertisements available</p>
                        </div>
                    )}
                    {selectedItem && (
                        <div style={{ backgroundColor: "white", padding: "20px", border: "1px solid #ccc", borderRadius: "8px", width: "400px" }}>
                            <h3>Update Item</h3>
                            <div style={{ marginBottom: "10px" }}>
                                <label>Name:</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
                                />
                            </div>
                            <div style={{ marginBottom: "10px" }}>
                                <label>Description:</label>
                                <textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleInputChange}
                                    style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
                                />
                            </div>
                            <div style={{ marginBottom: "10px" }}>
                                <label>Price:</label>
                                <input
                                    type="number"
                                    name="price"
                                    value={formData.price}
                                    onChange={handleInputChange}
                                    style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
                                />
                            </div>
                            <div style={{ marginBottom: "10px" }}>
                                <label>Bought Price:</label>
                                <input
                                    type="number"
                                    name="admprice"
                                    value={formData.admprice}
                                    onChange={handleInputChange}
                                    style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
                                />
                            </div>
                            <div style={{ marginBottom: "10px" }}>
                                <label>Image (URL):</label>
                                <input
                                    type="text"
                                    name="image"
                                    value={formData.image}
                                    onChange={handleInputChange}
                                    style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
                                />
                            </div>
                            <button onClick={handleSaveUpdate} style={{ width: "100%", padding: "10px", backgroundColor: "#4CAF50", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}>Save Update</button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Additems;

// import React, { useEffect, useState } from 'react';
// import { addItem, getItems, deleteItem, updateItem, uploadImage } from '../Service/api';

// const Additems = () => {
//   const [data, setData] = useState([]);
//   const [formData, setFormData] = useState({
//     name: '',
//     description: '',
//     price: 0,
//     admprice: 0,
//     image: null,
//   });
//   const [showItems, setShowItems] = useState(false);
//   const [selectedItem, setSelectedItem] = useState(null);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const items = await getItems();
//       setData(items);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   const handleImageUpload = async (e) => {
//     const file = e.target.files[0];
//     try {
//       const formDataWithImage = new FormData();
//       formDataWithImage.append('image', file);

//       // Upload image first
//       const imageResponse = await uploadImage(formDataWithImage);

//       // Update the form data with the received image URL
//       setFormData({
//         ...formData,
//         image: imageResponse.data.imageUrl, // Update with the actual field name returned by your backend
//       });
//     } catch (error) {
//       console.error('Error uploading image:', error.message);
//     }
//   };

//   const handleAddItem = async () => {
//     try {
//       await addItem(formData);
//       fetchData();
//       setShowItems(true);
//     } catch (error) {
//       console.error('Error:', error.message);
//     }
//   };


//   const handleDeleteItem = async (itemId) => {
//     try {
//       await deleteItem(itemId);
//       fetchData();
//     } catch (error) {
//       console.error('Error deleting item:', error.message);
//     }
//   };

//   const handleUpdateItem = (item) => {
//     setSelectedItem(item);
//     setFormData({
//       name: item.name,
//       description: item.description,
//       price: item.price,
//       admprice: item.admprice,
//       image: item.image,
//     });
//   };

//   const handleSaveUpdate = async () => {
//     try {
//       await updateItem(selectedItem._id, formData);
//       fetchData();
//       setShowItems(false);
//       setSelectedItem(null);
//       setFormData({
//         name: '',
//         description: '',
//         price: 0,
//         admprice: 0,
//         image: '',
//       });
//     } catch (error) {
//       console.error('Error updating item:', error.message);
//     }
//   };

//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   return (
//     <div className='container Additem' style={{ display: 'flex' }}>
//       <div style={{ backgroundColor: "white", padding: "20px", border: "1px solid #ccc", borderRadius: "8px", width: "400px", marginLeft: "10px" }}>
//         <h1>Add a Car Ad</h1>
//         <div style={{ marginBottom: "10px" }}>
//           <div style={{ marginBottom: "10px" }}>
//             <label>Name:</label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleInputChange}
//               style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
//             />
//           </div>
//           <div style={{ marginBottom: "10px" }}>
//             <label>Description:</label>
//             <textarea
//               name="description"
//               value={formData.description}
//               onChange={handleInputChange}
//               style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
//             />
//           </div>
//           <div style={{ marginBottom: "10px" }}>
//             <label>Price:</label>
//             <input
//               type="number"
//               name="price"
//               value={formData.price}
//               onChange={handleInputChange}
//               style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
//             />
//           </div>
//           <div style={{ marginBottom: "10px" }}>
//             <label>Bought Price:</label>
//             <input
//               type="number"
//               name="admprice"
//               value={formData.admprice}
//               onChange={handleInputChange}
//               style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
//             />
//           </div>
//           <div style={{ marginBottom: "10px" }}>
//             <label>Upload Image:</label>
//             <input
//               type="file"
//               accept="image/*"
//               onChange={handleImageUpload}
//               style={{ display: "none" }}
//               id="uploadImageInput"
//             />
//             <label htmlFor="uploadImageInput" style={{ 
//               width: "100%", 
//               padding: "8px", 
//               boxSizing: "border-box", 
//               backgroundColor: "#4CAF50", 
//               color: "white", 
//               border: "none", 
//               borderRadius: "4px", 
//               cursor: "pointer",
//               display: "block",
//               marginBottom: "10px",
//             }}>
//               Choose Image
//             </label>
//             {formData.image && (
//               <p>Selected Image: {formData.image.name}</p>
//             )}
//           </div>
//         </div>
//         <button onClick={handleAddItem} style={{ width: "100%", padding: "10px", backgroundColor: "#4CAF50", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}>Add Item</button>
//       </div>
//       {showItems && (
//         <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", marginLeft: "10px" }}>
//           {data.length > 0 ? (
//             <div style={{ backgroundColor: "white", padding: "20px", border: "1px solid #ccc", borderRadius: "8px", width: "600px", marginBottom: "10px" }}>
//               <h2>Advertisement List</h2>
//               <ul>
//                 {data.map(item => (
//                   <li key={item._id} style={{ marginBottom: "10px" }}>
//                     <div>
//                       <strong>Name:</strong> {item.name}
//                     </div>
//                     <div>
//                       <strong>Description:</strong> {item.description}
//                     </div>
//                     <div>
//                       <strong>Price:</strong> {item.price}
//                     </div>
//                     <div>
//                       <strong>Image:</strong>
//                       {item.image ? (
//                         <img src={item.image} alt="Item" style={{ width: "100%", maxWidth: "150px", height: "auto", marginTop: "10px" ,marginBottom:"20px"}} />
//                       ) : (
//                         "No image available"
//                       )}
//                     </div>
//                     <button style={{margin:"10px"}} onClick={() => handleUpdateItem(item)}>Update</button>
//                     <button style={{margin:"10px"}}onClick={() => handleDeleteItem(item._id)}>Delete</button>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ) : (
//             <div style={{ backgroundColor: "white", padding: "20px", border: "1px solid #ccc", borderRadius: "8px", width: "600px", marginBottom: "10px" }}>
//               <p>No advertisements available</p>
//             </div>
//           )}
//           {selectedItem && (
//             <div style={{ backgroundColor: "white", padding: "20px", border: "1px solid #ccc", borderRadius: "8px", width: "400px" }}>
//               <h3>Update Item</h3>
//               <div style={{ marginBottom: "10px" }}>
//                 <label>Name:</label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleInputChange}
//                   style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
//                 />
//               </div>
//               <div style={{ marginBottom: "10px" }}>
//                 <label>Description:</label>
//                 <textarea
//                   name="description"
//                   value={formData.description}
//                   onChange={handleInputChange}
//                   style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
//                 />
//               </div>
//               <div style={{ marginBottom: "10px" }}>
//                 <label>Price:</label>
//                 <input
//                   type="number"
//                   name="price"
//                   value={formData.price}
//                   onChange={handleInputChange}
//                   style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
//                 />
//               </div>
//               <div style={{ marginBottom: "10px" }}>
//                 <label>Bought Price:</label>
//                 <input
//                   type="number"
//                   name="admprice"
//                   value={formData.admprice}
//                   onChange={handleInputChange}
//                   style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
//                 />
//               </div>
//               <div style={{ marginBottom: "10px" }}>
//                 <label>Upload Image:</label>
//                 <input
//                   type="file"
//                   accept="image/*"
//                   onChange={handleImageUpload}
//                   style={{ display: "none" }}
//                   id="uploadImageInputUpdate"
//                 />
//                 <label htmlFor="uploadImageInputUpdate" style={{ 
//                   width: "100%", 
//                   padding: "8px", 
//                   boxSizing: "border-box", 
//                   backgroundColor: "#4CAF50", 
//                   color: "white", 
//                   border: "none", 
//                   borderRadius: "4px", 
//                   cursor: "pointer",
//                   display: "block",
//                   marginBottom: "10px",
//                 }}>Choose Image</label>
//                 {formData.image && (
//                   <p>Selected Image: {formData.image.name}</p>
//                 )}
//               </div>
//               <button onClick={handleSaveUpdate} style={{ width: "100%", padding: "10px", backgroundColor: "#4CAF50", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}>Save Update</button>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Additems;
