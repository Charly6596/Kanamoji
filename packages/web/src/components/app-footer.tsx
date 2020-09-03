import React from 'react'
import { Box, Text, Link, Flex, Icon, IconButton } from '@chakra-ui/core'

function AppFooter() {
  return (
    <Flex justify="center" background="white" padding={2}>
      <Link href="https://github.com/Charly6596/Kanamoji" color="gray.400" _hover={{color: 'gray.500'}} isExternal>
        <Icon name="github" size="32px" />
      </Link>
    </Flex>
  )
}

export default AppFooter

