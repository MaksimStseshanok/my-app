import React from 'react';
import './MovieCard.scss';

function MovieCard(props) {
  return (
    <div className="card">
      <div className="card__cover">
        <img
          src={`https://image.tmdb.org/t/p/original${props.poster}`}
          alt="cover"
        />
        <span className={checkRate(props.rate)}>{props.rate}</span>
      </div>
      <div className="card__content">
        <h3 className="card__title">{props.title}</h3>
        <p className="card__category">
          {/* <span>{props.genre}</span> */}
        </p>
      </div>
    </div>
  );
}

function checkRate(rate) {
  let classes = 'card__rate ';
  if (rate > 8) {
    return (classes += 'card__rate--green');
  } else if (rate < 6) {
    return (classes += 'card__rate--red');
  } else {
    return (classes += 'card__rate--yellow');
  }
}

export default MovieCard;
