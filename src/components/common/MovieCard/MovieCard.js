import React from 'react';
import { useHistory } from 'react-router-dom';
import './MovieCard.scss';
import classNames from 'classnames';
import Poster from '../Poster/Poster';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../features/userSlice';

function MovieCard(props) {
  const history = useHistory();
  const user = useSelector(selectUser);
  const {
    id,
    poster,
    rate,
    title,
    releaseDate = 'n/a',
    favoriteClickHandler,
  } = props;

  const rateClass = classNames({
    card__rate: true,
    'card__rate--green': rate >= 8,
    'card__rate--yellow': rate < 8 && rate >= 6,
    'card__rate--red': rate < 6,
  });

  const isFavorite = Boolean(user?.favorites[id]);

  return (
    <div className="card">
      <div className="card__cover">
        <Poster poster={poster} title={title} />
        {user?.isLogged && (
          <button
            onClick={() => favoriteClickHandler(id)}
            className="card__info"
          >
            {isFavorite ? '-' : '+'}
          </button>
        )}
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
