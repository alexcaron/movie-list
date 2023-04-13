import React from 'react';

const MovieListItem = ({ movie, allMovies, setAllMovies }) => {

  const [toggleOn, updateToggle] = React.useState(false);
  const toggleBehavior = () => {
    var newAllMovies = allMovies.map((movieInAllMovies) => {
      if (movieInAllMovies.id !== movie.id) {
        return movieInAllMovies;
      } else {
        return ({
          'title': movie.title,
          'id': movie.id,
          'isWatched': !movie.isWatched
        });
      }
    });
    setAllMovies(newAllMovies);
    updateToggle(!toggleOn);
  }
  return (
    <div className="movielist-item">
      <span>{ movie.title }</span>
      <button className={ (toggleOn) ? "movielist-item-toggle-watched" : "movielist-item-toggle-not-watched"} onClick={ toggleBehavior }>{ ((toggleOn) ? 'Watched' : 'To Watch') }</button>
    </div>
  );
};

export default MovieListItem;