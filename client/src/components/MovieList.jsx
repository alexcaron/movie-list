import React from 'react';

const MovieList = ({ movies }) => {
  const movielist = movies.map((movie) =>
    <li key={ movie.id } className="movielist-item">{ movie.title }</li>
  );
  return (
  <ul className="movielist">
    {movielist}
  </ul>
  );
};

export default MovieList;