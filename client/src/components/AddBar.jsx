import React from 'react';

const AddBar = ({ allMovies, setAllMovies }) => {
  const addBehavior = () => {
    var title = document.getElementById('movie-to-add').value;
    var movieId = allMovies.length + 1;
    var newMovieArray = [{title: title, id: movieId}].concat(allMovies);
    setAllMovies(newMovieArray);
    // console.log(query);
    // var results = allMovies.filter((movie) => movie.title.toLowerCase().includes(query));
    // console.log(results);
    // updateMovieList(results);
  }
  return (
    <div className="add-bar">
      <input type="text" id="movie-to-add" placeholder="Type a movie to add to your list" />
      <button onClick={ addBehavior }>Add</button>
    </div>
  );
};

export default AddBar;