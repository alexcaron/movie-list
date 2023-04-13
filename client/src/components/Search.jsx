import React from 'react';

const Search = ({ allMovies, updateMovieList }) => {
  const searchBehavior = () => {
    var query = document.getElementById('search').value.toLowerCase();
    console.log(query);
    var results = allMovies.filter((movie) => movie.title.toLowerCase().includes(query));
    console.log(results);
    updateMovieList(results);
  }
  return (
    <div className="search-bar">
      <input type="search" id="search" placeholder="Search for a movie..." />
      <button onClick={ searchBehavior }>Go</button>
    </div>
  );
};

export default Search;