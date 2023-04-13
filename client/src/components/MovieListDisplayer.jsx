import React from 'react';
import MovieList from '../components/MovieList.jsx';
import Search from '../components/Search.jsx';
import Tab from '../components/Tab.jsx';

const MovieListDisplayer = ({ allMovies, movieList, setAllMovies, updateMovieList }) => {
  const [displayTabId, setDisplayTabId] = React.useState("watched-tab");

  return (
    <div className="movie-list-displayer">
      <div className="movie-list-controls">
        <Tab id="watched-tab" displayTabId={ displayTabId } setDisplayTabId={ setDisplayTabId }/>
        <Tab id="to-watch-tab" displayTabId={ displayTabId } setDisplayTabId={ setDisplayTabId }/>
        <Search allMovies={ allMovies } updateMovieList={ updateMovieList } />
      </div>
      <MovieList allMovies={ allMovies } movieList={ movieList } setAllMovies={ setAllMovies }/>
    </div>
  );
};

export default MovieListDisplayer;