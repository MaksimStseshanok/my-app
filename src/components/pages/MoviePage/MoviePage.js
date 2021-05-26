import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import apiService from '../../../apiService/ApiServise';
import Spinner from '../../common/Spinner/Spinner';
import Poster from '../../common/Poster/Poster';
import './MoviePage.scss';

function MoviePage() {
  const { id } = useParams();
  const [movie, setMovie] = useState();

  useEffect(() => {
    apiService.getInfo(id).then((movie) => {
      setMovie(movie);
    });
  }, [id]);

  if (!movie) {
    return <Spinner />;
  }

  return (
    <div className="movie">
      <h1 className="movie__title">
        {movie.title}
        <span className="card__rate movie__rate">{movie.vote_average}</span>
      </h1>
      <div className="movie__wrapper">
        <div className="movie__picture">
          <Poster poster={movie.backdrop_path} title={movie.title} />
        </div>

        <ul className="movie__details">
          <li className="movie__details-item">
            <span className="movie__details-item-title">Release date:</span>
            <span className="movie__details-item-qesqr">
              {movie.release_date}
            </span>
          </li>
          <li className="movie__details-item">
            <span className="movie__details-item-title">Revenue:</span>
            <span className="movie__details-item-qesqr">{movie.revenue}</span>
          </li>
          <li className="movie__details-item">
            <span className="movie__details-item-title">Budget:</span>
            <span className="movie__details-item-qesqr">{movie.budget}</span>
          </li>
        </ul>
      </div>
      <p className="movie__desqr">{movie.overview}</p>
    </div>
  );
}

export default MoviePage;
