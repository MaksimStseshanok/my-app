import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './MovieList.scss';
import MovieCard from '../MovieCard/MovieCard';
import apiService from '../../apiService/ApiServise';
import Spinner from '../Spinner/Spinner';
import NotFoundPage from '../NotFoundPage/NotFoundPage';

function MovieList() {
  const { title } = useParams();
  const [movieList, setMovieList] = useState([]);
  const [searchResult, setSearchResult] = useState(false);

  useEffect(() => {
    if (!title) {
      apiService.getInfo('popular').then((data) => {
        setMovieList(data.results);
      });
    } else {
      apiService.getMovieByTitle(title).then((data) => {
        data.results.length
          ? setMovieList(data.results)
          : setSearchResult(true);
      });
    }
  }, [title]);

  if (!movieList.length && !searchResult) {
    return <Spinner />;
  }

  if (searchResult) {
    return <NotFoundPage searchValue={title} />;
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
