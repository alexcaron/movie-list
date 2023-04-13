import React from 'react';
import Title from '../components/Title.jsx';
import MovieList from '../components/MovieList.jsx'
import Search from '../components/Search.jsx'
import AddBar from '../components/AddBar.jsx'

const App = ({ movies }) => {
  const [allMovies, setAllMovies] = React.useState([]);
  const [movieList, setMovieList] = React.useState(movies);
  return (
    <div >
      <Title />
      <AddBar allMovies={ allMovies } setAllMovies={ setAllMovies } />
      <Search allMovies={ allMovies } movieList={ movieList } updateMovieList={ setMovieList } />
      <MovieList movieList={ movieList }/>
    </div>
)};

export default App;