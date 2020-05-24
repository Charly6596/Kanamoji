import React, { useState } from 'react';
import './App.css';
import { Text, Flex, Button, Stack, Input } from '@chakra-ui/core';
import GameContainer from './containers/game'
import HiraganaTable from './components/hiragana-table';

function App() {
  const [input, setInput] = useState('');
  const game = GameContainer.useContainer();

  const onStartClick = () => game.start();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      game.sendAnswer(input);
      setInput('');
    }
  }

  return (
    <Flex
      backgroundColor="#282c34"
      minH="100vh"
      justifyContent="center"
      padding="10"
    >
      <Stack
        width="80vw"
      >

        <Flex
          height="30vmin"
          borderRadius="20px"
          backgroundColor="white"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <HiraganaTable />
          <Text>Learn hiragana</Text>
          <Button variantColor="green" onClick={onStartClick}>Start</Button>
          <Text>{game.question()}</Text>
        </Flex>
        <Flex
          borderRadius="20px"
          backgroundColor="white"
          height="50vmin"
        >
          <Input
            textAlign="center"
            value={input}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
        </Flex>
      </Stack>
    </Flex>
  );
}

export default App;
