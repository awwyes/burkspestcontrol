import React from "react";
import { chakra, Box, Stack, Flex, useColorModeValue } from "@chakra-ui/react";
import CommercialQuoteButton from "../CommercialQuote/CommercialQuoteButton";

export default function CommercialCTA() {
  return (
    <Flex
      bg={useColorModeValue("white", "black")}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        justify="center"
        bg={useColorModeValue("white", "black")}
        w="full"
      >
        <Box
          w={{ base: "full", md: "75%", lg: "50%" }}
          px={4}
          py={20}
          textAlign={{ base: "left", md: "center" }}
        >
          <chakra.span
            fontSize={{ base: "3xl", sm: "4xl" }}
            fontWeight="extrabold"
            letterSpacing="tight"
            lineHeight="shorter"
            color={useColorModeValue("gray.900", "gray.100")}
            mb={6}
          >
            <chakra.span display="block">Request a Free Audit</chakra.span>
          </chakra.span>
          <chakra.p>
                Burks Pest Control has been controlling pests at large commercial and industrial sites for more than 10 years.
            </chakra.p>
          <Stack
            justifyContent={{ base: "left", md: "center" }}
            direction={{ base: "column", sm: "row" }}
            spacing={2}
            mt={2}
          >
            <Box display="inline-flex" rounded="md" shadow="md">
              <CommercialQuoteButton text={"Request an Audit"} />
            </Box>
          </Stack>
        </Box>
      </Flex>
    </Flex>
  );
}