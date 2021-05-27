import React, { useState, useEffect } from 'react';
import './MovieList.scss';
import { useParams } from 'react-router-dom';
import MovieCard from '../MovieCard/MovieCard';
import apiService from '../../../apiService/ApiServise';
import Spinner from '../Spinner/Spinner';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';

function MovieList() {
  const { title } = useParams();
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!title) {
      setLoading(true);
      apiService
        .getInfo('popular')
        .then((data) => {
          setMovieList(data.results);
        })
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    } else {
      setLoading(true);
      apiService
        .getMovieByTitle(title)
        .then((data) => {
          setMovieList(data.results);
        })
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }
  }, [title]);

  if (loading) {
    return <Spinner />;
  }

  if (!movieList.length) {
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
