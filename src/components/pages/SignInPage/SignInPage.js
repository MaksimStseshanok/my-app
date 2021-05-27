import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { signin } from '../../../features/userSlice';
import { useInput } from '../../../hooks/useInput';
import './SignInPage.scss';

function SignInPage() {
  const name = useInput('', { isEmpty: true });
  const password = useInput('', { minLength: 5 });
  const history = useHistory();
  const dispatch = useDispatch();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const storage = JSON.parse(localStorage.getItem('user'));
    if (storage?.name === name.value && storage?.password === password.value) {
      storage.isLogged = true;
      localStorage.setItem('user', JSON.stringify(storage));
      dispatch(signin(storage));
      history.push('/');
    } else {
      return alert('User not found, or password not correct!');
    }
  };

  return (
    <div className="sign-page">
      <form onSubmit={handleFormSubmit} action="" className="sign-page__form">
        <div className="sign-page__group">
          {name.isDirty && name.isEmpty && (
            <p className="sign-page__input-invalid">Сannot be empty</p>
          )}
          <input
            onChange={(e) => name.onChange(e)}
            onBlur={(e) => name.onBlur(e)}
            value={name.value}
            type="text"
            name="name"
            className="sign-page__input"
            placeholder="Name"
          />
        </div>
        <div className="sign-page__group">
          {password.isDirty && password.minLengthError && (
            <p className="sign-page__input-invalid">
              Password must be at least 5 characters long
            </p>
          )}
          <input
            onChange={(e) => password.onChange(e)}
            onBlur={(e) => password.onBlur(e)}
            value={password.value}
            name="password"
            type="password"
            className="sign-page__input"
            placeholder="Password"
          />
        </div>
        <button
          disabled={name.isEmpty || password.minLengthError}
          className="sign-page__btn"
        >
          sign in
        </button>
        <span className="sign-page__text">Don't have an account?</span>
        <Link to="/signup">
          <span>Sign up!</span>
        </Link>
      </form>
    </div>
  );
}

export default SignInPage;
