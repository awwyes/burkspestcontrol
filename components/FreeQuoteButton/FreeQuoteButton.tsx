import { IoIosArrowForward } from "react-icons/io";
import * as React from "react";
import { Box, Stack, Link, Icon, useColorModeValue } from "@chakra-ui/react";

export default function FreeQuoteButton() {
  return (
    <Stack
      justifyContent={{ base: "left", md: "center" }}
      direction={{ base: "column", sm: "row" }}
      spacing={2}
      mt={2}
    >
      <Box display="inline-flex" rounded="md" shadow="md">
        <Link
          w="full"
          display="inline-flex"
          alignItems="center"
          justifyContent="center"
          px={5}
          py={3}
          border="solid transparent"
          fontWeight="bold"
          rounded="md"
          href="/residential/quote"
          color={useColorModeValue("black", "black")}
          bg={useColorModeValue("yellow.500", "yellow.500")}
          _hover={{
            bg: useColorModeValue("black", "black"),
            color: useColorModeValue("yellow.500", "yellow.500"),
          }}
        >
          Free Quote &nbsp;
          <Icon as={IoIosArrowForward} />
        </Link>
      </Box>
    </Stack>
  );
}
