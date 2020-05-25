import React from 'react'
import { Box, Button, Stack } from '@chakra-ui/core'
import { Link } from 'react-router-dom'
import { ROUTES } from '../constants/routes'
import StatsContainer from '../containers/stats'

function StatsPage() {
  const stats = StatsContainer.useContainer();

  const printStats = () => {
    return <pre>
      {JSON.stringify(stats.get(), null, 2)}
    </pre>
  }

  return (
    <Stack align="center" padding={10}>
      {printStats()}
      <Link to={ROUTES.HOME}>
        <Button variantColor="green">Main page</Button>
      </Link>
    </Stack>
  )
}

export default StatsPage
