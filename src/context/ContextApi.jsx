import React, { createContext, useState } from 'react';
import { getSiteData } from '../firebase/fetchFirebase';
import { useEffect } from 'react';

// Create the context
const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [siteData, setSiteData] = useState({});

  useEffect(()=>{
    const fetchdata=async()=>{
      const data= await getSiteData()
      setSiteData(data.siteData)
      console.log(data);
    }
    fetchdata()
    console.log("from contextapi",siteData);
    
  },[])

  return (
    <MyContext.Provider value={{ siteData }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContext;
