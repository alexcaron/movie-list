import React from 'react';
import MovieListItem from '../components/MovieListItem.jsx'

const MovieList = ({ allMovies, movieList, setAllMovies, updateMovieList, tab }) => {
  var displayWatchedTab = (tab === "watched-tab");
  const movielist = movieList.filter((movie) => movie.isWatched === displayWatchedTab).map((movie) =>
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