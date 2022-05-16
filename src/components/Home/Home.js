import { useState,useEffect} from "react";
import {Link} from 'react-router-dom';


export default function Home () {
  const [movies, setMovies] = useState([]);

  async function getMovies() {
    let url = process.env.REACT_APP_SERVER;
  //  let url = "https://me-movies.herokuapp.com";
    console.log("1,url", url);
    let response = await fetch(`${url}/tren`);
    // console.log("2,response", response);

    let moviesData = await response.json();
     console.log("3,moviesData", moviesData);
     setMovies(movies);
    // console.log("states",recipes);
  }

  useEffect(() => {
    getMovies();
  }, );

  return (
    <>
      <Link><h1>Home Page</h1></Link>
    </>
  );
}