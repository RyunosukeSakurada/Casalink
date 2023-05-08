import React, { createContext, useEffect, useState } from 'react'

import {housesData} from "../data";

export const HouseContext = createContext();

const HouseContextProvider = ( {children} ) => {
  const [houses,setHouses] = useState(housesData);
  const [location, setLocation] = useState('Location (any)');
  const [locations, setLocations] = useState([]);
  const [property, setProperty] = useState('Property type (any)');
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState('Price range (any)');
  const [loading, setLoading] = useState(false);

   //return all locations
  useEffect(()=>{
    const allLocations = houses.map((house)=>{
      return house.area;
    });

    //remove duplicates
    const uniqueLocations = ['Location (any)', ...new Set(allLocations)]

    //set countries state
    setLocations(uniqueLocations);
  },[])

  //return all property
  useEffect(()=>{
    const allProperties = houses.map((house)=>{
      return house.type;
    });
  
    //remove duplicates
    const uniqueProperties = ['Property type (any)', ...new Set(allProperties)]
  
    //set properties state
    setProperties(uniqueProperties);
  },[])


  const handleClick = () => {
    //set loading
    setLoading(true)
    //create a function that checks if the string includes "(any)"
    const isDefault = (str) => {
      return str.split(' ').includes('(any)');
    };
    //get first value of price and parse it to number
    const minPrice = parseInt(price.split(' ')[0]);
    //get second value of price which is the maximum price and parse it to number
    const maxPrice = parseInt(price.split(' ')[2]);

    const newHouses = housesData.filter((house) => {
      const housePrice = parseInt(house.price);

      //if all values are selected 
      if(
        house.area === location
        && house.type === property 
        && housePrice >= minPrice 
        && housePrice <= maxPrice 
      ){
        return house;
      }

      //if all values are default
      if(isDefault(location) && isDefault(property) && isDefault(price)){
        return house;
      }

      //if location is not default
      if(!isDefault(location) && isDefault(property) && isDefault(price)){
        return house.area === location
      }
      //if property is not default
      if(isDefault(location) && !isDefault(property) && isDefault(price)){
        return house.type === property
      }
      //if pricce is not default
      if(isDefault(location) && isDefault(property) && !isDefault(price)){
        if(housePrice >= minPrice && housePrice <= maxPrice){
          return house;
        }
      }

      //if location & property is not default
      if(!isDefault(location) && !isDefault(property) && isDefault(price)){
        return house.area === location && house.type === property
      }
      //if location & prise is not default
      if(!isDefault(location) && isDefault(property) && !isDefault(price)){
        if(housePrice >= minPrice && housePrice <= maxPrice){
          return house.area === location;
        }
      }
      //if property & prise is not default
      if(isDefault(location) && !isDefault(property) && !isDefault(price)){
        if(housePrice >= minPrice && housePrice <= maxPrice){
          return house.type === property;
        }
      }
    });



    setTimeout(()=>{
      return (
        newHouses.length < 1 
        ?setHouses([])
        :setHouses(newHouses),
        setLoading(false)
      )
    },1000);
  }


  return (
    <HouseContext.Provider value={{
      location,
      setLocation,
      locations,
      property,
      setProperty,
      properties,
      price,
      setPrice,
      houses,
      loading,
      handleClick,
    }}>
      {children}
    </HouseContext.Provider>
  )
}

export default HouseContextProvider
