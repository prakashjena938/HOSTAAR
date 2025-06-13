import React from 'react';
import './Moviecard.css';

const MovieCard = ( {movie} ) => {
  return (
    <div className="maincard">
      <div className="myear">
        <p>{movie.Year}</p>
      </div>
      <div className="mpic">
        <img src={movie.Poster} alt={movie.Title} />
        <div className="mname">
          <h3>{movie.Title}</h3>
          <span>{movie.Type}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
