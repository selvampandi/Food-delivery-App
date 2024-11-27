import React, { useState, useEffect } from "react";
import { MENU_URL } from "../Utilis/Constants";
const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  const [error, setError] = useState(null); 

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(MENU_URL + resId);
      const json = await data?.json();
      setResInfo(json);
    } catch (error) {
      setError(error);
    }
  };
  
  if (error) {
    return <div>Error fetching data: {error.message}</div>; // Handle errors
  }

  return resInfo;
};

export default useRestaurantMenu;
