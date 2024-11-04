import React from "react";
import "../styles.css";

export default function MovieCard({ movie, toggleWatchlist, isWatchlisted }) {
  const errorHandler = (e) => {
    e.target.src = "public/images/default.jpg";
  };
  const getRatingColor = (rating) => {
    if (rating >= 8) return "rating-good";
    if (rating >= 5 && rating <= 8) return "rating-ok";

    return "rating-bad";
  };

  return (
    <div className="movie-card" key={movie.id}>
      <img
        src={`public/images/${movie.image}`}
        alt={movie.title}
        onError={errorHandler}
      />
      <div className="movie-card-info">
        <h3 className="movie-card-title">{movie.title}</h3>
        <div>
          <span className="movie-card-genre">{movie.genre}</span>
          <span className={`movie-card-rating ${getRatingColor(movie.rating)}`}>
            {movie.rating}
          </span>
          <label className="switch">
            <input
              type="checkbox"
              checked={isWatchlisted}
              onChange={()=>toggleWatchlist(movie.id)}
            />
            <span className="slider">
              <span className="slider-label">
                {isWatchlisted?"In watchlist":"Add to watchlist"}
              </span>
            </span>
          </label>
        </div>
      </div>
    </div>
  );
}
