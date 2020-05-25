import React from 'react'
import { Box, Button } from '@chakra-ui/core'
import HiraganaTable from '../components/hiragana-table'
import { Link as RouterLink } from 'react-router-dom'
import { ROUTES } from '../constants/routes'

function HomePage() {
    return (
        <>
        <Box>
            <HiraganaTable />
        </Box>
        <Box>
            <RouterLink to={ROUTES.GAME}>
                <Button variantColor="green">Start</Button>
            </RouterLink>
        </Box>
        </>
    )
}

export default HomePage
