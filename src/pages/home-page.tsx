import React from 'react'
import { Box, Button } from '@chakra-ui/core'
import { Link as RouterLink } from 'react-router-dom'
import { ROUTES } from '../constants/routes'
import KanaTable from '../components/kana-table'

function HomePage() {
  return (
    <>
        <KanaTable group="hiragana" monograph={true} dakuten={false}/>
      <Box>
        <RouterLink to={ROUTES.GAME}>
          <Button variantColor="green">Start</Button>
        </RouterLink>
      </Box>
    </>
  )
}

export default HomePage
