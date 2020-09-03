import React, { useEffect } from 'react'
import { Game } from '@kanamoji/controllers'
import { Text, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, useDisclosure, Box } from '@chakra-ui/core'
import { Link } from 'react-router-dom'
import { ROUTES } from '../constants/routes'

interface Props {
  game: Game,
  isOpen: boolean
}

function GameSummaryModal({ game, isOpen }: Props) {
  return (
    <Modal closeOnOverlayClick={false} isOpen={isOpen} isCentered size={["xs", "md", "md"]}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Game finished</ModalHeader>
        <ModalBody pb={6}>
          <Box textAlign="center">
            <Text fontSize="2rem">Success</Text>
            <Text fontSize="5em">{(game.correct / game.questions.length * 100).toFixed(2)}%</Text>
          </Box>
          <Box textAlign="center">
            <Text fontSize='2em'>Points</Text>
            <Text fontSize="5em">{(game.correct * 50).toFixed()}</Text>
          </Box>
        </ModalBody>

        <ModalFooter justifyContent="space-around">
          <Link to={ROUTES.HOME}>
            <Button>Home page</Button>
          </Link>
          <Link to={ROUTES.STATS}>
            <Button>Stats page</Button>
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
export default GameSummaryModal
