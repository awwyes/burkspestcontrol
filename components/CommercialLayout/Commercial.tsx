import { Stack, Flex, Text, VStack, useBreakpointValue, useColorModeValue } from "@chakra-ui/react";
import CommercialQuoteButton from "./CommercialQuote/CommercialQuoteButton";

export default function Commercial() {
  return (
    <Flex
      w={"full"}
      h={"80vh"}
      backgroundImage={"/commercial.webp"}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <VStack
        justify={"left"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
        alignItems={"flex-start"}
      >
        <Stack
          maxW={"2xl"}
          align={"flex-start"}
          spacing={6}
          paddingTop={"150px"}
        >
          <Text
            color={useColorModeValue("white", "yellow.500")}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
          >
            The Experts in Commercial Pest Control
          </Text>
          <Text
            color={useColorModeValue("yellow.500", "white")}
            fontWeight={700}
            lineHeight={1.2}
            textAlign={"left"}
            fontSize={useBreakpointValue({ base: "xl", md: "2xl" })}
          >
            Whether you&apos;re in healthcare, manufacturing, or another
            commercial field, we know how to prevent pest problems in your
            industry.
          </Text>
          <Stack direction={"row"}>
            <CommercialQuoteButton text={"Request a Free Audit"} />
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}