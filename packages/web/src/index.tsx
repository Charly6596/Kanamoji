import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ThemeProvider, CSSReset, theme } from '@chakra-ui/core';
import { ConfigContainer } from '@kanamoji/controllers';
import { StatsContainer } from '@kanamoji/controllers';
import { GameContainer } from '@kanamoji/controllers';
import { SelectModeContainer } from '@kanamoji/controllers';
import { initStorage } from '@kanamoji/controllers';

initStorage(window.localStorage);

const icons = {
  github: {
    path: <path fill="currentColor" d="M8 0a8 8 0 00-2.5 15.6c.4 0 .5-.2.5-.4v-1.5c-2 .4-2.5-.5-2.7-1 0-.1-.5-.9-.8-1-.3-.2-.7-.6 0-.6.6 0 1 .6 1.2.8.7 1.2 1.9 1 2.4.7 0-.5.2-.9.5-1-1.8-.3-3.7-1-3.7-4 0-.9.3-1.6.8-2.2 0-.2-.3-1 .1-2 0 0 .7-.3 2.2.7a7.4 7.4 0 014 0c1.5-1 2.2-.8 2.2-.8.5 1.1.2 2 .1 2.1.5.6.8 1.3.8 2.2 0 3-1.9 3.7-3.6 4 .3.2.5.7.5 1.4v2.2c0 .2.1.5.5.4A8 8 0 0016 8a8 8 0 00-8-8z"/>,
    viewBox: "0 0 16 16",
  }
}

const myTheme = {
  ...theme,
  icons: {
    ...theme.icons,
    ...icons
  }
}
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={myTheme}>
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
