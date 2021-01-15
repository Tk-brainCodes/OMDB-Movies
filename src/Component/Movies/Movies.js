import React, { useState } from 'react';
import axios from 'axios';
import './Movies.css'

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState('');


    const searchMovie = async (e) => {
        e.preventDefault();

        const API_KEY = "b57e0c63";
        const apiURI = `http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${query}`;

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
            <div className="header">
                <h1 className="title">The Shoppies</h1>

                {/*Search form*/}

                <div className="search">
                    <form className="search-form" onSubmit={searchMovie}>
                        <label
                            htmlFor="query"
                            className="name"
                        >
                            Movie Name :
                      </label>
                        <input
                            type="text"
                            name="query"
                            placeholder="i.e Guardians of the Galaxy Vol. 2"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                        <button type="submit">Search</button>
                    </form>

                </div>
                <button className="norminee">List Of Norminations</button>
            </div>


            {/*Display movies*/}

            <div className="cardlist__movies">
                {movies.filter(movie => movie.Poster).map((movie, index) => (
                    <div className="card" key={index}>
                        <img
                            className="movie__image"
                            src={movie.Poster}
                            alt="postal"
                        />
                        <div className="flex__card">
                            <p className="heading">{movie.Title}</p>
                            <p className="paragraph">{movie.Year}</p>
                            <br />
                            <button className="norminee">Norminate</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Movies;
