import React, { useState } from "react";
import "../styles.css";
import MovieCard from "./MovieCard";

export default function MoviesGrid({movies,toggleWatchlist,watchlist}) {
 
  const [searchBar, setSearchBar] = useState("");
  const [genre, setGenre] = useState("All Genres");
  const [rating, setRating] = useState("All");



  const setFilterOnSearchBarChange = (e) => {
    setSearchBar(e.target.value);
  };

  const setGenreChange = (e) => {
    setGenre(e.target.value);
  };

  const setRatingChange = (e) => {
    setRating(e.target.value);
  };

  const matchesSearchTerm = (movie, searchTerm) => {
    return movie.title.toLowerCase().includes(searchBar.toLowerCase());
  };
  const matchesGenre = (movie, genres) => {
    return (
      genres === "All Genres" ||
      movie.genre.toLowerCase() === genre.toLowerCase()
    );
  };
  const matchesRating = (movie, rating) => {
    switch (rating) {
      case "All":
        return true;
      case "Good":
        return movie.rating >= 8;
      case "Ok":
        return movie.rating >= 5 && movie < 8;
      case "Bad":
        return movie.rating < 5;
      default:
        return false;
    }
  };
  const filteredMovies = movies.filter(
    (movie) =>
      matchesGenre(movie, genre) &&
      matchesRating(movie, rating) &&
      matchesSearchTerm(movie, searchBar)
  );

  return (
    <div>
      <input
        className="search-input"
        type="text"
        placeholder="searching...."
        value={searchBar}
        onChange={setFilterOnSearchBarChange}
      />
      <div className="filter-bar">
        <div className="filter-slot">
          <label>Genre</label>
          <select
            className="filter-dropdown"
            onChange={setGenreChange}
            value={genre}
          >
            <option>All Genres</option>
            <option>Action</option>
            <option>Drama</option>
            <option>Fantasy</option>
            <option>Horror</option>
          </select>
        </div>
        <div className="filter-slot">
          <label>Rating</label>
          <select
            className="filter-dropdown"
            onChange={setRatingChange}
            value={rating}
          >
            <option>All</option>
            <option>Good</option>
            <option>Bad</option>
            <option>Ok</option>
          </select>
        </div>
      </div>
      <div className="movies-grid">
        {filteredMovies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} toggleWatchlist={toggleWatchlist} isWatchlisted={watchlist.includes(movie.id)}></MovieCard>
        ))}
      </div>
    </div>
  );
}
