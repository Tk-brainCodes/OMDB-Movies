import React from 'react';
import './Header.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import MovieLIst from '../Movies/LIst/MovieList';
import Card from '../Card/Card';


const Header = ({ searchMovie, query, setQuery, movies }) => {
    return (
        <Router>
            <div className="header">
                <Link to="/" className="link">
                    <h1 className="title">The Shoppies</h1>
                </Link>

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
                <Link to="/list">
                    <button className="norminee">List Of Norminations</button>
                </Link>
            </div>
            <div className="list-movie">
                <Switch>
                    <Route path="/list">
                        <MovieLIst />
                    </Route>
                    <Route path="/">
                        <Card movies={movies} />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default Header;
