import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ThemeProvider, CSSReset, ColorModeProvider } from '@chakra-ui/core';
import GameContainer from './containers/game'
import ConfigContainer from './containers/configuration'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <ColorModeProvider>
        <CSSReset />
        <ConfigContainer.Provider>
          <GameContainer.Provider>
            <App />
          </GameContainer.Provider>
        </ConfigContainer.Provider>
      </ColorModeProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
