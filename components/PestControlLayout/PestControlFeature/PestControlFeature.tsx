import { Box, SimpleGrid, Stack, Heading, Flex, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'
import { FcInspection, FcHome, FcOk, FcPlus } from 'react-icons/fc'
import { Feature } from './Feature'

export default function PestControlFeature() {
  return (
    <Flex
      bg={useColorModeValue('white', 'black')}
    >
      <Box as="section" maxW="8xl" mx="auto" py="6" px={{ base: '6', md: '8' }}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 6, md: 14 }}
          py={{ base: 8, md: 8 }}
        >
          <Heading
            fontWeight={400}
            fontFamily={'sans-serif'}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}
            paddingBottom={12}
            color={useColorModeValue("black", "yellow.500")}
          >
            Burks Pest Control Process
          </Heading>
        </Stack>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacingX="10" spacingY={{ base: '8', md: '14' }} color={useColorModeValue("black", "yellow.500")}>
          <Feature title="Inspection" icon={<FcInspection />}>
            We identify conditions that encourage infestations and recommend a control program.
          </Feature>
          <Feature title="Interior Treatment" icon={<FcHome />}>
            In our initial visit, we treat cracks, crevices, and voids in the home to eliminate pest problems at their source.
          </Feature>
          <Feature title="Perimeter Protection" icon={<FcPlus />}>
            We seal, caulk, and correct outside areas to block pests from gaining entry. We then establish a protective barrier around your home using exterior baits, granules, and other scientifically-proven products.
          </Feature>
          <Feature title="Monitoring & Prevention" icon={<FcOk />}>
            As the seasons change, your home becomes more appealing to a variety of insects, spiders, and rodents. Your Burks professional consistently monitors your home's protective barrier to make sure pests can't get in.
          </Feature>
        </SimpleGrid>
      </Box>
    </Flex>
  )
}