import React from 'react';
import './NotFoundPage.scss';

function NotFoundPage({ searchValue }) {
  return (
    <div className="not-found">
      <h1 className="not-found__title">{searchValue}</h1>
      <h2 className="not-found__page-title">not found</h2>
    </div>
  );
}

export default NotFoundPage;
