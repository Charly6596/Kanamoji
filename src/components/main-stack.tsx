import React from 'react'
import { Stack, StackProps } from '@chakra-ui/core'
import AppTitle from './app-title'

interface MainStackProps {
  noTitle?: boolean;
}
function MainStack({ noTitle, ...rest }: StackProps & MainStackProps) {
  const renderTitle = () => {
    if (!noTitle) {
      return <AppTitle />
    }
  }

  return (
    <Stack
      backgroundColor="#282c34"
      minH="100vh"
      paddingX={['0', '0', '20%']}
      {...rest}
    >
      {renderTitle()}
      {rest.children} 
    </Stack>
  )
}

export default MainStack
