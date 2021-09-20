import React from "react";
import { Link } from "react-router-dom";

const MovieList = (props) => {
  return (
    <>
      {props.movies.map((movie, index) => (
        <div className="card">
          <img src={movie.Poster} alt="movie poster"></img>
          <div className="text">
            <h1>{movie.Title}</h1>
            <h2>{movie.Year}</h2>
            <button>
              <Link
                to={{
                  pathname: `/movie/${movie.imdbID}`,
                  state: { movie: movie },
                }}
              >
                More Details
              </Link>
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieList;
