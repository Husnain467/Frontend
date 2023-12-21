
import React, { createContext, useContext } from "react";

const SparePartContext = createContext();


export const SparePartProvider = ({ children }) => {
 
  const [cart, setCart] = React.useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <SparePartContext.Provider value={{ cart, addToCart }}>
      {children}
    </SparePartContext.Provider>
  );
};

export const useSparePartContext = () => {
  return useContext(SparePartContext);
};
