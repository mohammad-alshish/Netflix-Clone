import React, { useEffect, useState } from "react";
import MovieList from '../MovieList/MovieList';

export default function Home() {

    const [movie, setMovie] = useState();
    const getMovie = async () => {
        try {
            console.log(`https://me-movies.herokuapp.com`)
            const response = await fetch(`https://me-movies.herokuapp.com/tren`)
            console.log(response);
            const data = await response.json();
            console.log(data);
            setMovie(data);
        } catch (error) {
            console.log("error", error);
        }
    };

    useEffect(() => {
        getMovie();
    }, []);

    console.log("hello");
    return (
        <>
            <h1>Home Page</h1>
            <h3>Movie List</h3>

                {
                   movie && (<MovieList movies={movie} />)
                }
         

        </>
    )
}