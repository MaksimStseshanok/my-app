import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';

import {
  MainPage,
  MoviePage,
  SignInPage,
  SignUpPage,
  FavoritesPage,
} from './components/pages';

import { Header, MovieList } from './components/common';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/movie/:id">
          <MoviePage />
        </Route>
        <Route path="/search/:title">
          <MovieList />
        </Route>
        <Route path="/signin">
          <SignInPage />
        </Route>
        <Route path="/signup">
          <SignUpPage />
        </Route>
        <Route path="/:favorites">
          <FavoritesPage />
        </Route>
        <Route exact path="/" component={MainPage} />
      </Switch>
    </Router>
  );
}

export default App;
