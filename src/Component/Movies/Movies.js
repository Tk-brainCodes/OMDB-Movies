import React, { useState } from 'react';
import Header from '../Header/Header';
import axios from 'axios';
import './Movies.css'

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState('');


    const searchMovie = async (e) => {
        e.preventDefault();

        const API_KEY = "b57e0c63";
        const apiURI = `https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${query}`;

        try {
            const response = await axios.get(apiURI);
            const data = response.data.Search
            console.log(data)
            setMovies(data);

        } catch (err) {
            console.error(err);
        }
    }

    console.log(movies, "movies");


    return (
        <div className="shoppies">
            <Header
                searchMovie={searchMovie}
                query={query}
                setQuery={setQuery}
                movies={movies}
            />
            {/*Display movies*/}
        </div>
    )
}

export default Movies;
