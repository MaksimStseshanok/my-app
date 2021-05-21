import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

import logo from './movie.svg';
import user from './user.svg';

function Header() {
  // const history = useHistory();
  return (
    <header className="header">
      <div className="header__row">
        <Link to="/">
          <img src={logo} alt="logo" className="header__logo" />
        </Link>
        <h1>The movie app</h1>
        <img src={user} alt="logo" className="header__user-logo" />
      </div>
    </header>
  );
}

export default Header;
