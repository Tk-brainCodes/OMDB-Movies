import React from 'react';

const Card = ({ movies }) => {
    return (

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
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Card;
