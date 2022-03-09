import { Stack, Flex, Box, Image, useColorModeValue, chakra } from '@chakra-ui/react';
import FreeQuoteButton from '../FreeQuoteButton/FreeQuoteButton';
import BedBugWhy from './BedbugWhy';
  
  export default function Bedbug() {
    return (
        <>
        <Flex
        direction={{ base: "column", md: "row" }}
        bg={useColorModeValue("white", "black")}
        px={8}
        py={10}
        mx="auto"
      >
      <Box w={{ base: "full", md: 10 / 12 }} mx="auto" textAlign="center">
          <Image
            w="full"
            shadow="2xl"
            src="/bedbugs.jpeg"
            alt="Picture of a bedbugs on a bed mattress"
          />
        </Box>
        <Box
          w={{ base: "full", md: 11 / 12, xl: 9 / 12 }}
          mx="auto"
          pt={{ base: 5, md: 0 }}
          pl={{ md: 20 }}
          pr={{ md: 20 }}
        >
          <chakra.h2
            fontSize={{ base: "3xl", sm: "4xl" }}
            fontWeight="extrabold"
            lineHeight="shorter"
            color={useColorModeValue("black", "gray.100")}
            mb={6}
          >
            <chakra.span display="block">Bed Bug Removal</chakra.span>
            <chakra.span
              display="block"
              color={useColorModeValue("black", "yellow.500")}
              as={'span'}
              fontSize={20}
            >
              Eliminate Bed Bugs Where They Live and Breed
            </chakra.span>
          </chakra.h2>
          <chakra.p
            mb={6}
            fontSize={{ base: "lg", md: "xl" }}
            color={useColorModeValue("black", "gray.300")}
          >
            Our bed bug experts will evaluate the situation to determine the best strategy, products and/or heat treatment to eradicate bed bugs from your home.
          </chakra.p>
          <Stack
            direction={{ base: "column", sm: "row" }}
            mb={{ base: 4, md: 8 }}
            spacing={2}
          >
            <FreeQuoteButton text={'Request an Inspection'}/>
          </Stack>
        </Box>
      </Flex>
      <BedBugWhy />
      </>
    );
  }

