import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Movies.css'

const Movies = () => {
    const [loading, setLoading] = useState(false);
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState('');

    const API_KEY = "b57e0c63";
    const apiURI = `http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${query}`;

    useEffect(() => {
        const fetchMovie = async () => {
            setLoading(true) //make request
            const response = await axios.get(apiURI, { header: { Accept: "apllicatio/json" } });
            console.log(response.data);
        }
        setLoading(false) //received response

        fetchMovie();
    }, [apiURI]);

    const searchMovie = async (e) => {
        e.preventDefault();
        console.log('searching')
    }

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
                />
                <button className="button" type="submit">Search</button>
            </form>
        </div>
    )
}

export default Movies;
