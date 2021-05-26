import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import SearchPanel from '../SearchPanel/SearchPanel';

import logo from './movie.svg';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, signout } from '../../../features/userSlice';

function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const onClickSignout = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    user.isLoged = false;
    localStorage.setItem('user', JSON.stringify(user));
    dispatch(signout());
  };

  return (
    <header className="header">
      <div className="header__row">
        <Link to="/">
          <img src={logo} alt="logo" className="header__logo" />
        </Link>
        <h1>The movie app</h1>
        <SearchPanel />
        {user?.isLoged ? (
          <>
            <span>Favorites</span>
            <span>History</span>
            <span onClick={onClickSignout} className="material-icons">
              logout
            </span>
          </>
        ) : (
          <Link to="/signin">
            <span className="material-icons">login</span>
          </Link>
        )}
      </div>
    </header>
  );
}

export default Header;
