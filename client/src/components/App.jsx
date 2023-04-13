import React from 'react';
import Title from '../components/Title.jsx';
import MovieList from '../components/MovieList.jsx'
import Search from '../components/Search.jsx'
import AddBar from '../components/AddBar.jsx'

const App = () => {
  const [allMovies, setAllMovies] = React.useState([]);
  const [movieList, setMovieList] = React.useState([]);
  return (
    <div >
      <Title />
      <AddBar allMovies={ allMovies } setAllMovies={ setAllMovies } updateMovieList ={ setMovieList }/>
      <Search allMovies={ allMovies } updateMovieList={ setMovieList } />
      <MovieList allMovies={ allMovies } movieList={ movieList } setAllMovies={ setAllMovies }/>
    </div>
)};

export default App;