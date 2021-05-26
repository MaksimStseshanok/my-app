import React from 'react';
import { useHistory } from 'react-router-dom';
import './MovieCard.scss';
import classNames from 'classnames';
import Poster from '../Poster/Poster';

function MovieCard(props) {
  const history = useHistory();
  const { id, poster, rate, title, releaseDate = '...' } = props;

  const rateClass = classNames({
    card__rate: true,
    'card__rate--green': rate >= 8,
    'card__rate--yellow': rate < 8 && rate >= 6,
    'card__rate--red': rate < 6,
  });

  return (
    <div className="card">
      <div className="card__cover">
        <Poster poster={poster} title={title} />
        <span className="card__info">+</span>
        <span className={rateClass}>{rate}</span>
      </div>
      <div
        className="card__content"
        onClick={() => {
          history.push(`/movie/${id}`);
        }}
      >
        <h3 className="card__title">{title}</h3>
        <span className="card__date">{releaseDate.slice(0, 4)}</span>
      </div>
    </div>
  );
}

export default MovieCard;
