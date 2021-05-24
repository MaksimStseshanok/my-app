import React from 'react';
import './NotFoundPage.scss';

function NotFoundPage({ searchValue }) {
  const title = searchValue ? (
    <h1 className="not-found__title">"{searchValue}"</h1>
  ) : null;
  return (
    <div className="not-found">
      {title}
      <h2 className="not-found__page-title">not found</h2>
    </div>
  );
}

export default NotFoundPage;
