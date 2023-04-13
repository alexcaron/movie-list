import React from 'react';
import MovieListItem from '../components/MovieListItem.jsx'

const MovieList = ({ allMovies, movieList, setAllMovies, updateMovieList }) => {
  const movielist = movieList.map((movie) =>
    <MovieListItem key={ movie.id } movie={ movie } allMovies={ allMovies } setAllMovies={ setAllMovies }/>
  );
  return (

  <div className="movielist">
    {movielist}
    <div className="no-results-message">{ movieList.length === 0 ? "No movies found 🍿" : "" }</div>
  </div>
  );
};

export default MovieList;