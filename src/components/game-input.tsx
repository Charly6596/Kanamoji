import React, { useState, useRef, useEffect } from 'react'
import { Input } from '@chakra-ui/core';

interface Props {
  onAnswer: (answer: string) => void
}

const GameInput = React.memo<Props>(({ onAnswer }) => {
  const [input, setInput] = useState('')
  const inputRef = useRef<any>();

  useEffect(() => {
    inputRef.current.focus();
  }, [inputRef])

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onAnswer(input);
    setInput('');
  }

  return (
    <div>
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
    </div>
  )
});

export default GameInput
