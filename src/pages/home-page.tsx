import React from 'react'
import { Box, Button, Text, Stack, Tabs, TabList, Tab, TabPanel, TabPanels } from '@chakra-ui/core'
import { Link as RouterLink } from 'react-router-dom'
import { ROUTES } from '../constants/routes'
import KanaTable from '../components/kana-table'
import MainStack from '../components/main-stack'

function HomePage() {
  return (
    <MainStack>
      <Stack
        backgroundColor="gray.200"
        paddingY={5}
        borderRadius={['0', '0', '20px']}
        alignItems="center"
        spacing={5}
      >
        <Box position='fixed' bottom={2} right={2}>
          <RouterLink to={ROUTES.GAME}>
            <Button rounded="100%" height="4rem" width="4rem" variantColor='teal'>Start</Button>
          </RouterLink>
        </Box>
        <Tabs size='lg' isFitted>
          <TabList>
            <Tab _selected={{ borderBottomColor: 'teal.300', color: 'teal.300' }}>あ Hiragana</Tab>
            <Tab _selected={{ borderBottomColor: 'teal.300', color: 'teal.300' }}>カ Katakana</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Box>
                <KanaTable title='Monograph' group="hiragana" monograph={true} dakuten={false} />
              </Box>
              <Box>
                <KanaTable title='Dakuten' group="hiragana" monograph={true} dakuten={true} />
              </Box>
            </TabPanel>
            <TabPanel>
              <Box>
                <KanaTable title='Monograph' group="katakana" monograph={true} dakuten={false} />
              </Box>
              <Box>
                <KanaTable title='Dakuten' group="katakana" monograph={true} dakuten={true} />
              </Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Stack>
    </MainStack>
  )
}

export default HomePage
