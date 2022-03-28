import { Box, Stack, StackDivider, useColorModeValue } from "@chakra-ui/react";
import { Copyright } from "./Copyright";
import LinkGrid from "./LinkGrid";
import Logo from "../LogoLayout/Logo";
import SocialMediaLinks from "./SocialMediaLinks";

export default function Footer() {
  return (
    <Box bg={useColorModeValue("gray.200", "black")}>
      <Box
        as="footer"
        role="contentinfo"
        mx="auto"
        maxW="7xl"
        py="12"
        px={{ base: "4", md: "8" }}
      >
        <Stack spacing="10" divider={<StackDivider />}>
          <Stack
            direction={{ base: "column", lg: "row" }}
            spacing={{ base: "10", md: "20", lg: "28" }}
          >
            <Box flex="1">
              <Logo mt="40px" />
            </Box>
            <Stack
              direction={{ base: "column", md: "row" }}
              spacing={{ base: "10", md: "20" }}
            >
              <LinkGrid spacing={{ base: "10", md: "20", lg: "28" }} flex="1" />
            </Stack>
          </Stack>
          <Stack
            direction={{ base: "column-reverse", md: "row" }}
            justifyContent="space-between"
            alignItems="center"
          >
            <Copyright />
            <SocialMediaLinks />
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}
