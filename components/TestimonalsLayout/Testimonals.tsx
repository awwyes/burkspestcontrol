import { Box, Circle, Flex, HStack, Text, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'
import Quotee from './Quotee'
import { QuoteIcon } from './QuoteIcon'

export default function Testimonals () {
    return (
        <Box as="section" bg={useColorModeValue('white', 'black')}>
        <Box maxW="3xl" mx="auto" px={{ base: '12', md: '8' }} pt="6" pb="6">
          <Flex direction="column" align="center" textAlign="center">
            <QuoteIcon
              color={useColorModeValue('gray.300', 'gray.600')}
              fontSize={{ base: '3xl', md: '6xl' }}
            />
            <Text fontSize={{ base: 'xl', md: '2xl' }} fontWeight="medium" mt="6">
              &ldquo;Burks Pest Control is the best in the business. Very reliable and gets the job done.
              I would give it a 5 star rating over the other pest control businesses in this town.&rdquo;
            </Text>
            <Quotee
              name="Amber Burks"
              jobTitle="Teacher"
              imageSrc="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OTN8fGxhZHklMjBoZWFkc2hvdCUyMHNtaWxpbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
              mt="8"
            />
          </Flex>
          <HStack justify="center" spacing="4" mt="8" color={useColorModeValue('gray.300', 'gray.600')}>
            <Circle w="3" h="3" bg="blue.500" />
            <Circle w="2" h="2" bg="currentColor" />
            <Circle w="2" h="2" bg="currentColor" />
          </HStack>
        </Box>
      </Box>
    )
}