import React from 'react';

const AddBar = ({ allMovies, setAllMovies, updateMovieList }) => {
  const addBehavior = () => {
    var title = document.getElementById('movie-to-add').value;
    var movieId = allMovies.length + 1;
    var newMovieArray = [{title: title, id: movieId}].concat(allMovies);
    setAllMovies(newMovieArray);
    updateMovieList(newMovieArray);
    document.getElementById('movie-to-add').value = '';
    document.getElementById('search').value = '';
  }
  return (
    <div className="add-bar">
      <input type="text" id="movie-to-add" placeholder="Type a movie to add to your list" />
      <button onClick={ addBehavior }>Add</button>
    </div>
  );
};

export default AddBar;