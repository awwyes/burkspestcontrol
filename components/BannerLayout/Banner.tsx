import { BellIcon } from '@chakra-ui/icons'
import { Box, HStack, Icon, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'
import { BannerLink } from './BannerLink'

export const Banner = () => (
  <Box as="section" pt="0" pb="12">
    <Stack
      direction={{ base: 'column', sm: 'row' }}
      justifyContent="center"
      alignItems="center"
      py="1"
      px={{ base: '3', md: '6', lg: '8' }}
      color={useColorModeValue('black', "yellow.500")}
      bg={useColorModeValue('yellow.500', 'black')}
    >
      <HStack spacing="3">
        <Icon as={BellIcon} fontSize="2xl" h="10" />
        <Text fontWeight="medium" marginEnd="2" align="center">
        Coronavirus response: Burks Pest Control remains committed and ready to help protect your family and home as an essential service provider in your community.
        </Text>
      </HStack>
      <BannerLink w={{ base: 'full', sm: 'auto' }} flexShrink={0}>
        Learn More
      </BannerLink>
    </Stack>
  </Box>
)