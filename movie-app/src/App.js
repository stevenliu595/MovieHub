import React, { useState, useEffect } from "react";
import MovieList from "./components/MovieList";
import "./App.css";
import PageHeading from "./components/PageHeading";
import SearchBox from "./components/SearchBox";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchResult, setSearchResult] = useState("");

  const getMovieRequest = async (searchResult) => {
    const url = `https://www.omdbapi.com/?s=${searchResult}&apikey=2ccc1368`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchResult);
  }, [searchResult]);

  return (
    <div>
      <div className="navigation">
        <PageHeading heading="Movie Hub" />
        <SearchBox
          searchResult={searchResult}
          setSearchResult={setSearchResult}
        />
      </div>
      <div className="container">
        <MovieList movies={movies} />
      </div>
    </div>
  );
}

export default App;
