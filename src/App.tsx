import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ROUTES } from './constants/routes';
import HomePage from './pages/home-page';
import GamePage from './pages/game-page';
import StatsPage from './pages/stats-page';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={ROUTES.GAME}>
          <GamePage />
        </Route>
        <Route exact path={ROUTES.STATS}>
          <StatsPage />
        </Route>
        <Route exact path={ROUTES.HOME}>
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
