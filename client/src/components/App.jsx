import React from 'react';
import Title from '../components/Title.jsx';
import MovieList from '../components/MovieList.jsx'
import Search from '../components/Search.jsx'
const App = ({ movies }) => {
  const [allMovies, setAllMovies] = React.useState(movies);
  const [movieList, setMovieList] = React.useState(movies);
  return (
    <div >
      <Title />
      <Search allMovies={ allMovies } updateMovieList={ setMovieList } />
      <MovieList movieList={ movieList }/>
    </div>
)};

export default App;