import React from 'react';

const MovieList = ({ movieList }) => {
  const movielist = movieList.map((movie) =>
    <li key={ movie.id } className="movielist-item">{ movie.title }</li>
  );
  return (
  <ul className="movielist">
    {movielist}
  </ul>
  );
};

export default MovieList;