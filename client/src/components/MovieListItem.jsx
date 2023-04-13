import React from 'react';

const MovieListItem = ({ movie }) => {
  const toggleBehavior = () => {

  }
  return (
    <div key={ movie.id } className="movielist-item">
      <span>{ movie.title }</span>
      <button className="movielist-item-toggle-is-watched">{ ((movie.isWatched) ? 'Watched' : 'To Watch') }</button>
    </div>
  );
};

export default MovieListItem;