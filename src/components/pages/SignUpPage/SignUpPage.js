import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './SignUpPage.scss';

import { useDispatch, useSelector } from 'react-redux';
import { signup, selectUser } from '../../../features/userSlice';
import { useInput } from '../../../hooks/useInput';

function SignUpPage() {
  const name = useInput('', { isEmpty: true });
  const email = useInput('', { emailError: true });
  const password = useInput('', { minLength: 5 });
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (user?.name !== name.value) {
      const user = {
        name: name.value,
        email: email.value,
        password: password.value,
      };
      dispatch(signup(user));
      history.push('/');
    } else {
      return alert('Name is taken');
    }
  };

  return (
    <div className="sign-page">
      <form onSubmit={handleFormSubmit} className="sign-page__form">
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
          {email.isDirty && email.emailError && (
            <p className="sign-page__input-invalid">
              Please enter a real email address
            </p>
          )}
          <input
            onChange={(e) => email.onChange(e)}
            onBlur={(e) => email.onBlur(e)}
            value={email.value}
            name="email"
            type="text"
            className="sign-page__input"
            placeholder="Email"
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
          disabled={name.isEmpty || email.emailError || password.minLengthError}
          className="sign-page__btn"
        >
          sign up
        </button>
        <span className="sign-page__text">Already have an account?</span>
        <Link to="/signin">
          <span>Sign in!</span>
        </Link>
      </form>
    </div>
  );
}

export default SignUpPage;
