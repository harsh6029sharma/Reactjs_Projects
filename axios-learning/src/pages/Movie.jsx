import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Movie = () => {

    const [data,setData] = useState([]);

    const API = 'https://www.omdbapi.com/?i=tt3896198&apikey=4f17dcd1&s=titanic&page=1'
    // const res = await axios.get(API)
    //we will use useEffect because we want that whenever the page loaded or mounted then we will fetch data from API
    const getMovieData = async () => {
        //whenever we use async await then always use try catch to handle error
        try{
            const res = await axios.get(API);
            console.log(res);
            setData(res.data.Ratings)
        } catch(error){
            console.log(error);
        }
    }
    useEffect(()=>{
        getMovieData();
    },[])
  return (
    <div>
        
    </div>
  )
}

export default Movie