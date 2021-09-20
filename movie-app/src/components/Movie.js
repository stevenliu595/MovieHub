import React from "react";
import { Link } from "react-router-dom";

const Movie = (props) => {
  const { Title, Poster, Year } = props.location.state.movie;

  return (
    <div className="movie-div">
      <h1>{Title}</h1>
      <img src={Poster} alt="Movie Image"></img>
      <h2>Release Date: {Year}</h2>

      <button>
        <Link to="/">Go Back</Link>
      </button>
    </div>
  );
};

export default Movie;
