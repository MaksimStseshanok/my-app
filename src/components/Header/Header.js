import React from 'react';
import './Header.scss';
import { withRouter } from 'react-router-dom';

import logo from './movie.svg';
import user from './user.svg';

function Header({ history }) {
  return (
    <header
      className="header"
      onClick={() => {
        history.push(`/`);
      }}
    >
      <div className="header__row">
        <img src={logo} alt="logo" className="header__logo" />
        <h1>The movie app</h1>
        <img src={user} alt="logo" className="header__user-logo" />
      </div>
    </header>
  );
}

export default withRouter(Header);
