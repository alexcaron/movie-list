import React from 'react';
import Title from '../components/Title.jsx';
import MovieListDisplayer from '../components/MovieListDisplayer.jsx';
import AddBar from '../components/AddBar.jsx'

const App = () => {
  const [allMovies, setAllMovies] = React.useState([]);
  const [movieList, setMovieList] = React.useState([]);
  return (
    <div >
      <Title />
      <AddBar allMovies={ allMovies } setAllMovies={ setAllMovies } updateMovieList ={ setMovieList }/>
      <MovieListDisplayer allMovies={ allMovies } movieList={ movieList } setAllMovies={ setAllMovies } updateMovieList={ setMovieList } />
    </div>
)};

export default App;