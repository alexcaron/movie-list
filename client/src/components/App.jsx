import React from 'react';
import Title from '../components/Title.jsx';
import MovieList from '../components/MovieList.jsx'
import Search from '../components/Search.jsx'
import AddBar from '../components/AddBar.jsx'

const movieData = [
  {title: 'Mean Girls', id: 0},
  {title: 'Hackers', id: 1},
  {title: 'The Grey', id: 2},
  {title: 'Sunshine', id: 3},
  {title: 'Ex Machina', id: 4},
];

const App = () => {
  const [allMovies, setAllMovies] = React.useState([]);
  const [movieList, setMovieList] = React.useState([]);
  return (
    <div >
      <Title />
      <AddBar allMovies={ allMovies } setAllMovies={ setAllMovies } updateMovieList ={ setMovieList }/>
      <Search allMovies={ allMovies } updateMovieList={ setMovieList } />
      <MovieList allMovies={ allMovies } movieList={ movieList } />
    </div>
)};

export default App;