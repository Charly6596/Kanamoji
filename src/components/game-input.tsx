import React, { useState, useRef, useEffect } from 'react'
import { Input } from '@chakra-ui/core';
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
    <form onSubmit={(e) => onSubmit(e)}>
      <Input
        fontSize="2em"
        ref={inputRef}
        placeholder="Enter your answer..."
        value={input}
        border={0}
        textAlign="center"
        focusBorderColor="transparent"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
      />
    </form>
  )
});

export default GameInput
