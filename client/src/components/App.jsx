import React from 'react';
import Title from '../components/Title.jsx';
import MovieList from '../components/MovieList.jsx'
import Search from '../components/Search.jsx'
const App = ({ movies }) => {
  return (
    <div >
      <Title />
      <Search />
      <MovieList movies={ movies }/>
    </div>
)};

export default App;