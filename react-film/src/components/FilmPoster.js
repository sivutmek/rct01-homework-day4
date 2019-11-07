import React from 'react';

const posterUrlPrefix = 'https://image.tmdb.org/t/p/w780/';

const FilmPoster = props => {
  return <img src={posterUrlPrefix + props.posterPath} alt="" />;
};

export default FilmPoster;