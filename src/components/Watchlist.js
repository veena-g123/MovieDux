import React from "react";
import "../styles.css";
import MovieCard from "./MovieCard";

export default function Watchlist({ movies, toggleWatchlist, watchlist }) {

  return (
    <div>
        <h1 className="title">WatchList</h1>
        <div className="watchlist">
            {
                watchlist.map(id=>{
                   const movie= movies.find(movie=>movie.id===id);
                   return <MovieCard movie={movie} key={movie.id} toggleWatchlist={toggleWatchlist} isWatchlisted={true}></MovieCard>

                })
            }
        </div>
    </div>
  );
}
