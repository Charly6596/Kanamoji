import React, { useState, useRef, useEffect } from 'react'
import { Input, Box } from '@chakra-ui/core';
import { GameContainer } from '../containers/game';

const GameInput = React.memo(() => {
  const [input, setInput] = useState('')
  const inputRef = useRef<any>();
  const game = GameContainer.useContainer();

  game.onError.current = () => {
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [inputRef])

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    game.answer(input);
    setInput('');
  }

  return (
    <Box position={['relative']} bottom='0' width='100%'>
      <form onSubmit={(e) => onSubmit(e)}>
        <Input
          background="gray.200"
          fontSize="1.5em"
          ref={inputRef}
          placeholder="Enter your answer..."
          value={input}
          border={0}
          borderRadius={0}
          textAlign="center"
          focusBorderColor="transparent"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
        />
      </form>
    </Box>
  )
});

export default GameInput
