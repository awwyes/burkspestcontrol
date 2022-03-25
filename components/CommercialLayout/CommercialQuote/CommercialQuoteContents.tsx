import { Box, chakra, Checkbox, Divider, Flex, Grid, GridItem, Heading, Stack, useColorModeValue } from "@chakra-ui/react";

interface FeatureProps {
  index: number;
}

export default function Contents({ index, ...rest }: FeatureProps) {
  return (
    <>
      <Flex {...rest}>
        <Box>
          <Heading
            as={"h1"}
            fontFamily={"sans-serif"}
            fontSize={"2xl"}
            marginBottom={3}
          >
            Please tell us a little more about your commerical facility needs. *
          </Heading>
          <Divider />
          <Grid
            h="200px"
            templateRows={"repeat(2, 1fr"}
            templateColumns={"repeat(5, 1fr"}
            gap={4}
          >
            <GridItem mt={[5, null, 3]} rowSpan={{ md: 1 }} colSpan={{ md: 2 }}>
              <chakra.form
                method="POST"
                shadow="base"
                rounded={[null, "md"]}
                overflow={{ sm: "hidden" }}
              >
                <Stack
                  px={4}
                  py={5}
                  p={[null, 6]}
                  bg={useColorModeValue("white", "black")}
                  spacing={6}
                >
                  <chakra.fieldset>
                    <Stack mt={4} spacing={4}>
                      <Flex alignItems="start">
                        <Flex alignItems="center" h={5}>
                          <Checkbox
                            colorScheme="yellow"
                            id="newConstruction"
                            rounded="md"
                          />
                        </Flex>
                        <Box ml={3} fontSize="sm">
                          <chakra.label
                            htmlFor="newConstruction"
                            fontWeight="md"
                            color={useColorModeValue("gray.700", "gray.50")}
                          >
                            New Construction
                          </chakra.label>
                        </Box>
                      </Flex>
                      <Flex alignItems="start">
                        <Flex alignItems="center" h={5}>
                          <Checkbox
                            colorScheme="yellow"
                            id="displeased"
                            rounded="md"
                          />
                        </Flex>
                        <Box ml={3} fontSize="sm">
                          <chakra.label
                            htmlFor="displeased"
                            fontWeight="md"
                            color={useColorModeValue("gray.700", "gray.50")}
                          >
                            Displeased with current provider
                          </chakra.label>
                        </Box>
                      </Flex>
                    </Stack>
                  </chakra.fieldset>
                  <chakra.fieldset>
                    <Stack mt={4} spacing={4}>
                      <Flex alignItems="start">
                        <Flex alignItems="center" h={5}>
                          <Checkbox
                            colorScheme="yellow"
                            id="newConstruction"
                            rounded="md"
                          />
                        </Flex>
                        <Box ml={3} fontSize="sm">
                          <chakra.label
                            htmlFor="newConstruction"
                            fontWeight="md"
                            color={useColorModeValue("gray.700", "gray.50")}
                          >
                            New Construction
                          </chakra.label>
                        </Box>
                      </Flex>
                      <Flex alignItems="start">
                        <Flex alignItems="center" h={5}>
                          <Checkbox
                            colorScheme="yellow"
                            color={useColorModeValue("black", "black")}
                            id="displeased"
                            rounded="md"
                          />
                        </Flex>
                        <Box ml={3} fontSize="sm">
                          <chakra.label
                            htmlFor="displeased"
                            fontWeight="md"
                            color={useColorModeValue("gray.700", "gray.50")}
                          >
                            Displeased with current provider
                          </chakra.label>
                        </Box>
                      </Flex>
                    </Stack>
                  </chakra.fieldset>
                </Stack>
              </chakra.form>
            </GridItem>
          </Grid>
        </Box>
      </Flex>
    </>
  );
}
