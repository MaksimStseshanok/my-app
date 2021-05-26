import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/common/Header/Header';
import MainPage from './components/pages/MainPage/MainPage';
import MoviePage from './components/pages/MoviePage/MoviePage';
import MovieList from './components/common/MovieList/MovieList';
import SignInPage from './components/pages/SignInPage/SignInPage';
import SignUpPage from './components/pages/SignUpPage/SignUpPage';

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
        <Route exact path="/" component={MainPage} />
      </Switch>
    </Router>
  );
}

export default App;
