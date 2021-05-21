import React, { useState, useEffect } from 'react';
import './MovieList.scss';
import MovieCard from '../MovieCard/MovieCard';
import apiService from '../../apiService/ApiServise';
import Spinner from '../Spinner/Spinner';

function MovieList() {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    apiService.getInfo('popular').then((movies) => {
      setMovieList(movies.results);
    });
  }, []);

  if (!movieList.length) {
    return <Spinner />;
  }

  return (
    <div className="movie-list">
      <div className="movie-list__wrapper">
        {movieList.map((movie) => {
          const {
            id,
            poster_path: poster,
            vote_average: rate,
            title,
            release_date: date,
          } = movie;
          return (
            <MovieCard
              key={id}
              poster={poster}
              rate={rate}
              title={title}
              releaseDate={date}
              id={id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default MovieList;
