import React from 'react';
import MovieListItem from '../components/MovieListItem.jsx'

const MovieList = ({ allMovies, movieList }) => {
  const movielist = movieList.map((movie) =>
    <MovieListItem movie={ movie } />
  );
  return (
  <div className="movielist">
    {movielist}
    <div className="no-results-message">{ movieList.length === 0 ? "No movies found 🍿" : "" }</div>
  </div>
  );
};

export default MovieList;