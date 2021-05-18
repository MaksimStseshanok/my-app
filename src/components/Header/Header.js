import React from 'react';
import './Header.scss';

import logo from '../../assets/images/movie.svg';
import user from '../../assets/images/user.svg';

function Header() {
  return (
    <header className="header">
      <div className="header__row">
        <img src={logo} alt="logo" className="header__logo" />
        <h1>The movie app</h1>
        <img src={user} alt="logo" className="header__user-logo" />
      </div>
    </header>
  );
}

export default Header;
