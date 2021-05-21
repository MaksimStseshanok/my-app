import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { Counter } from './features/counter/Counter';
import './App.scss';
import Header from './components/Header/Header';
import MainPage from './components/MainPage/MainPage';
import MoviePage from './components/MoviePage/MoviePage';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route
          exact
          path="/movie/:id"
          render={({ match }) => {
            const { id } = match.params;
            return <MoviePage movieId={id} />;
          }}
        />
        <Route exact path="/" component={MainPage} />
      </Switch>
    </Router>
  );
}

export default App;
