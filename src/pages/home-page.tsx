import React from 'react'
import { Box, Button, Text, Stack, Tabs, TabList, Tab, TabPanel, TabPanels } from '@chakra-ui/core'
import { Link as RouterLink } from 'react-router-dom'
import { ROUTES } from '../constants/routes'
import KanaTable from '../components/kana-table'
import MainStack from '../components/main-stack'
import { SelectModeContainer } from '../containers/select-mode'
import { ConfigContainer } from '../containers/configuration'
import AppFooter from '../components/app-footer'

function HomePage() {
  const select = SelectModeContainer.useContainer();
  const anyEnabled = ConfigContainer.useContainer().get().size > 0
  return (
    <>
    <MainStack>
      <Stack
        backgroundColor="gray.200"
        paddingY={5}
        borderRadius={['0', '0', '20px 10px 0 0']}
        alignItems="center"
        spacing={5}
      >
        <Stack position='fixed' bottom={1} right={[3, 10]} alignItems="center" spacing={5}>
          <Box>
            <RouterLink to={ROUTES.GAME}>
              <Button rounded="100%" height="4rem" width="4rem" variantColor='teal' isDisabled={!anyEnabled}>Start</Button>
            </RouterLink>
          </Box>
          <Button
            rounded="100%"
            height="4rem"
            width="4rem"
            variantColor='teal'
            onClick={select.toggle}
          >
            Select
              </Button>
        </Stack>
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
      <AppFooter />
      </>
  )
}

export default HomePage
