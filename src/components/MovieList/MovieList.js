import React, { useState, useEffect } from 'react';
import './MovieList.scss';
import MovieCard from '../MovieCard/MovieCard';
import ApiService from '../../apiService/ApiServise';

function MovieList() {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const apiService = new ApiService();
    apiService.getMovies(1).then((movies) => {
      setMovieList(movies.results);
    });
  }, []);

  return (
    <div className="movie-list">
      <div className="movie-list__wrapper">
        {movieList.map((movie) => {
          return (
            <MovieCard
              key={movie.id}
              poster={movie.poster_path}
              rate={movie.vote_average}
              title={movie.title}
              // genre={movie.genre_ids}
            />
          );
        })}
      </div>
    </div>
  );
}

export default MovieList;
