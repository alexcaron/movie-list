import React from 'react';

const MovieList = ({ allMovies, movieList }) => {
  const movielist = movieList.map((movie) =>
    <li key={ movie.id } className="movielist-item">{ movie.title }</li>
  );
  return (
  <ul className="movielist">
    {movielist}
    <div className="no-results-message">{ movieList.length === 0 ? "No movies found 🍿 " : "" }</div>
  </ul>
  );
};

export default MovieList;