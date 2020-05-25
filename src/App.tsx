import React from 'react';
import './App.css';
import { Text, Stack, Box } from '@chakra-ui/core';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ROUTES } from './constants/routes';
import HomePage from './pages/home-page';
import GamePage from './pages/game-page';

function App() {
  return (
    <Stack
      backgroundColor="#282c34"
      minH="100vh"
      paddingX="20%"
    >
      <Box textAlign="center">
        <Text color="white" fontWeight="bold" fontSize="5rem">仮名文字</Text>
      </Box>
      <Stack
        backgroundColor="white"
        paddingY={5}
        borderRadius="20px"
        alignItems="center"
        spacing={5}
      >
        <BrowserRouter>
          <Switch>
            <Route exact path={ROUTES.GAME}>
              <GamePage />
           </Route>
            <Route exact path={ROUTES.HOME}>
              <HomePage />
            </Route>
          </Switch>
        </BrowserRouter>

      </Stack>
    </Stack>
  );
}

export default App;
