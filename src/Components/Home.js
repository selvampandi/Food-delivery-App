import React from 'react';
import { useState,useEffect } from 'react';
import { HOMEPAGE_URL } from '../Utilis/Constants';

const Home = () => {
    const [homeData, setHomeData] = useState([]);
 

  useEffect(() => {
    fetchData()
  }, []);

  const fetchData = async () =>{
    const data = await fetch(HOMEPAGE_URL);
    const json = await data.json();
    // console.log(json,"json")
  }

    
  return (
    <div>
      hi
      
    </div>
  )
}

export default Home
