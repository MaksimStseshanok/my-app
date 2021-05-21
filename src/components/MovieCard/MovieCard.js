import React from 'react';
import classNames from 'classnames';
import './MovieCard.scss';
import { withRouter } from 'react-router-dom';

function MovieCard(props) {
  const { id, poster, rate, title, releaseDate, history } = props;
  const rateClass = classNames({
    card__rate: true,
    'card__rate--green': rate >= 8,
    'card__rate--yellow': rate < 8 && rate >= 6,
    'card__rate--red': rate < 6,
  });
  return (
    <div className="card">
      <div className="card__cover">
        <img src={`https://image.tmdb.org/t/p/original${poster}`} alt="cover" />
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

export default withRouter(MovieCard);
