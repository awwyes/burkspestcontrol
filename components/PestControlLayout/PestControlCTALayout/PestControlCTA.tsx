import { Box, Flex, chakra, Stack, Image, useColorModeValue } from '@chakra-ui/react'

export default function PestControlCTA() {
    return (
      <Flex
      direction={{ base: "column", md: "row" }}
      bg={useColorModeValue("white", 'black')}
      px={8}
      py={8}
      mx="auto"
    >
      <Box
        w={{ base: "full", md: 11 / 19, xl: 9 / 12 }}
        mx="auto"
        pr={{ md: 20 }}
      >
        <chakra.h2
          fontSize={{ base: "3xl", sm: "4xl" }}
          fontWeight="regular"
          fontFamily={'sans-serif'}
          lineHeight="shorter"
          color={useColorModeValue("yellow.500", "yellow.500")}
          mb={6}
        >
          <chakra.span display="block" fontFamily={'sans-serif'} fontSize={30}>Quarterly Treatments | EPS</chakra.span>
          <chakra.span
            display="block"
            color={useColorModeValue("white", "gray.500")}
            fontSize={{ base: "1xl", sm: '2xl'}}
          >
            Seasonal protection from pests
          </chakra.span>
        </chakra.h2>
        <chakra.p
          mb={6}
          fontSize={{ base: "xl", md: "lg" }}
          color={useColorModeValue("gray.800", "gray.300")}
        >
          Our highly trained professionals are eager to develop a customized plan to help protect your home with EPS, our Extreme Pest Service.
        </chakra.p>
        <chakra.p
          mb={6}
          fontSize={{ base: "xl", md: "lg" }}
          color={useColorModeValue("gray.800", "gray.300")}
        >
            Our pest control service, EPS, takes advantage of the latest advancements in pest control, allowing us to reduce the number of scheduled service visits to your property!
        </chakra.p>
        <chakra.p
          mb={6}
          fontSize={{ base: "xl", md: "lg" }}
          color={useColorModeValue("gray.800", "gray.300")}
        >
            Your initial service includes a thorough, custom treatment of the exterior of your home.
        </chakra.p>
        <chakra.p
          mb={6}
          fontSize={{ base: "xl", md: "lg" }}
          color={useColorModeValue("gray.800", "gray.300")}
        >
            Ongoing quarterly treatments focus on the exterior, where most pest infestations originate.
        </chakra.p>
        <chakra.p
          mb={6}
          fontSize={{ base: "xl", md: "lg" }}
          color={useColorModeValue("gray.800", "gray.300")}
        >
            If you have a pest problem between quarterly treatments, we’ll come back until it’s resolved, free of charge.
        </chakra.p>
      </Box>
      <Box w={{ base: "full", md: 10 / 12 }} mx="auto" textAlign="center">
        <Image
          w="full"
          rounded="lg"
          shadow="2xl"
          src="/IMG_8273.jpeg"
          alt="EPS"
        />
      </Box>
    </Flex>
    )
}