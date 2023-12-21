import { createContext, useContext, useEffect, useState } from "react";
import Corolla from "../Img/Grande.webp";
import reborn from "../Img/reborn.jpg";
import prado from "../Img/prado.webp";
import cruiser from "../Img/cruiser.webp";
import vezel from "../Img/vezel.png";
import Tucson from "../Img/tucson.jpg";

const CarAdsContext = createContext();

export function CarAdsProvider({ children }) {
  const [sdata, setdata] = useState([]);

const fetchProduct = async () => {
  try {
    let result = await fetch('https://backend-roan-ten.vercel.app/get-items');
    result = await result.json();
    console.log(result);

    
    setdata(result);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

useEffect(() => {
  fetchProduct();
}, []);

// Now log the updated state outside the fetchProduct function

  const [carAds,setcarAds] = useState([
    {
      title: "Honda Civic",
      description: "Honda Reborn with excellent condition.",
      img: reborn,
      price: 39.99,
      adId: 1,
    },
    {
      title: "Toyota Prado",
      description: "Brand new Toyota prado with verified auction sheet",
      img: prado,
      price: 39.99,
      adId: 2,
    },
    {
      title: "Toyota Land Cruiser",
      description: "Brand new Toyota Land Cruiser with verified auction sheet",
      img: cruiser,
      price: 39.99,
      adId:3,
    },
    {
      title: "Honda Vezel",
      description:
        "Honda vezel model 2018 import 2021.Good condition verified Auction sheet",
      img: vezel,
      price: 59,
      adId:4,
    },
    {
      title: "Hyundai Tucson",
      description: "Brand new Hyundai Tucson locally assembled",
      img: Tucson,
      price: 59,
      adId:5,
    },
    {
      title: "Toyota Grande",
      description: "Low milleage car with brand new tyres.",
      img:Corolla,
      price: 59,
      adId:6,
    },
  ]);

  return (
    <CarAdsContext.Provider value={{ carAds, sdata }}>
      {children}
    </CarAdsContext.Provider>
  );
}

export function useCarAds() {
  return useContext(CarAdsContext);
}
