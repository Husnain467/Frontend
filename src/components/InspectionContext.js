import React, { createContext, useContext, useState } from "react";

const InspectionContext = createContext();

export const InspectionProvider = ({ children }) => {
  const [selectedPackage, setSelectedPackage] = useState(null);

  const setPackage = (packageData) => {
    setSelectedPackage(packageData);
  };

  return (
    <InspectionContext.Provider value={{ selectedPackage, setPackage }}>
      {children}
    </InspectionContext.Provider>
  );
};

export const useInspectionContext = () => {
  return useContext(InspectionContext);
};
