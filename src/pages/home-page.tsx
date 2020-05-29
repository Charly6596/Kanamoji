import React from 'react'
import { Box, Button, Text, Stack } from '@chakra-ui/core'
import { Link as RouterLink } from 'react-router-dom'
import { ROUTES } from '../constants/routes'
import KanaTable from '../components/kana-table'

function HomePage() {
  return (
    <>
      <Stack spacing="1rem">
        <Box>
          <KanaTable title='Monograph' group="hiragana" monograph={true} dakuten={false} />
        </Box>
        <Box>
          <KanaTable title='Dakuten' group="hiragana" monograph={true} dakuten={true} />
        </Box>
      </Stack>
      <Box position='fixed' bottom={2} right={2}>
        <RouterLink to={ROUTES.GAME}>
          <Button rounded="100%" height="4rem" width="4rem" variantColor='teal'>Start</Button>
        </RouterLink>
      </Box>
    </>
  )
}

export default HomePage
