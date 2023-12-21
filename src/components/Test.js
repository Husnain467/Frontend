import React, { useEffect, useState } from 'react';

export default function Test() {
  const [data, setData] = useState([]);

  const fetchProduct = async () => {
    try {
      let result = await fetch('http://localhost:5000/get-items');
      result = await result.json();
      setData(result);
      console.log(data);
      alert(JSON.stringify(data));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []); // Empty dependency array to run the effect only once on component mount

  return <div></div>;
}
