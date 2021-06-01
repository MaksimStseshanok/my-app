import React, { useState, useEffect } from 'react';
import './MovieList.scss';
import { useParams } from 'react-router-dom';
import MovieCard from '../MovieCard/MovieCard';
import apiService from '../../../apiService/ApiServise';
import Spinner from '../Spinner/Spinner';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import {
  selectUser,
  addFavorites,
  removeFavorites,
} from '../../../features/userSlice';
import { useDispatch, useSelector } from 'react-redux';

function MovieList() {
  const { title, favorites } = useParams();
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    if (!title && !favorites) {
      setLoading(true);
      apiService
        .getInfo('popular')
        .then((data) => {
          setMovieList(data.results);
        })
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    } else if (title) {
      setLoading(true);
      apiService
        .getMovieByTitle(title)
        .then((data) => {
          setMovieList(data.results);
        })
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    } else if (favorites) {
      setMovieList(user.favorites);
    }
  }, [title, favorites, user]);

  const getMovie = (id) => {
    if (user.favorites.find((movie) => movie.id === id)) {
      dispatch(removeFavorites(id));
      return;
    }
    const movie = movieList.find((movie) => movie.id === id);
    dispatch(addFavorites(movie));
  };

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

          const favoriteMovie = user.favorites.find((movie) => movie.id === id);

          return (
            <MovieCard
              key={id}
              poster={poster}
              rate={rate}
              title={title}
              releaseDate={date}
              id={id}
              clickHandler={getMovie}
              btn={favoriteMovie ? '-' : '+'}
            />
          );
        })}
      </div>
    </div>
  );
}

export default MovieList;
