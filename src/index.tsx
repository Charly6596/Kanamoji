import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ThemeProvider, CSSReset, ColorModeProvider, theme } from '@chakra-ui/core';
import { ConfigContainer } from './containers/configuration';
import { StatsContainer } from './containers/stats';
import { GameContainer } from './containers/game';
import { SelectModeContainer } from './containers/select-mode';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CSSReset />
      <ConfigContainer.Provider>
        <StatsContainer.Provider>
          <GameContainer.Provider>
            <SelectModeContainer.Provider>
              <App />
            </SelectModeContainer.Provider>
          </GameContainer.Provider>
        </StatsContainer.Provider>
      </ConfigContainer.Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
