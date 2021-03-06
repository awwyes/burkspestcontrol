import { Stack, Flex, Box, Image, useColorModeValue, chakra } from '@chakra-ui/react';
import FreeQuoteButton from '../FreeQuoteButton/FreeQuoteButton';
import TermiteWhy from './TermiteWhy';
  
export default function Termite() {
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
          src="/termites.gif"
          alt="Picture of active termites"
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
          <chakra.span display="block">Termite Control</chakra.span>
          <chakra.span
            display="block"
            color={useColorModeValue("black", "yellow.500")}
            as={'span'}
            fontSize={20}
          >
            Today’s Most Effective Technology for Termite Control
          </chakra.span>
        </chakra.h2>
        <chakra.p
          mb={6}
          fontSize={{ base: "lg", md: "xl" }}
          color={useColorModeValue("black", "gray.300")}
        >
          Protect your home from termites with the proven combination of Burks Pest Control and the Annual Trelona Termite Baiting System.
        </chakra.p>
        <Stack
          direction={{ base: "column", sm: "row" }}
          mb={{ base: 4, md: 8 }}
          spacing={2}
        >
          <FreeQuoteButton text='Free Quote' />
        </Stack>
      </Box>
    </Flex>
    <TermiteWhy />
    </>
  );
}