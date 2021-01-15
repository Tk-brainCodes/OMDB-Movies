import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Movies.css'

const Movies = () => {
    const [loading, setLoading] = useState(false);
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState('');


    const searchMovie = async (e) => {
        e.preventDefault();

        const API_KEY = "b57e0c63";
        const apiURI = `http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${query}`;

        try {
            const response = await axios.get(apiURI);
           const  data = response.data.Search
             setMovies(data);

        } catch (err) {
            console.error(err);
        }
    }

    console.log(movies, "movies");

    return (
        <div>
            <h1>The Shoppies</h1>
            <form className="form" onSubmit={searchMovie}>
                <label
                    className="label"
                    htmlFor="query"
                >
                    Movie Name
                </label>

                <input
                    className="input"
                    type="text"
                    name="query"
                    placeholder="i.e Guardians of the Galaxy Vol. 2"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button className="button" type="submit">Search</button>
            </form>

            {/*Display movies*/}
            <div className="card__list__movies">
                {movies.map(movie =>  movie.Title)}
            </div>
        </div>
    )
}

export default Movies;
