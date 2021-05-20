import React, { useState, useEffect } from 'react';
import './MovieList.scss';
import MovieCard from '../MovieCard/MovieCard';
import apiService from '../../apiService/ApiServise';

function MovieList() {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    apiService.getMovies(1).then((movies) => {
      setMovieList(movies.results);
    });
  }, []);

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
            />
          );
        })}
      </div>
    </div>
  );
}

export default MovieList;
