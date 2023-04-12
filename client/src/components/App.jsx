import React from 'react';
import Title from '../components/Title.jsx';
import MovieList from '../components/MovieList.jsx'
const App = ({ movies }) => {
  return (
    <div >
      <Title />
      <MovieList movies={ movies }/>
    </div>
)};

export default App;