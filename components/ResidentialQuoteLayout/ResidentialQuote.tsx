import { PhoneIcon } from "@chakra-ui/icons";
import { chakra, Box, Text, Stack, Input, Button, Select, Heading, Divider, GridItem, FormLabel,
  Checkbox, SimpleGrid, FormControl, InputGroup, CheckboxGroup, useColorModeValue, InputLeftAddon
} from "@chakra-ui/react";
import React, { useState } from "react";
import { states } from "../constants";

export default function Quote() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [preferContact, setPreferContact] = useState("");
  const [serviceOptions, setServiceOptions] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sending Info");

    let data = {
      firstName,
      lastName,
      address,
      city,
      state,
      zipCode,
      phone,
      email,
      preferContact,
      serviceOptions,
    };

    fetch("/api/quote", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("Response received");
      if (res.status === 200) {
        console.log("Response succeeded!");
        setSubmitted(true);
      }
    });
  };

  return (
    <>
      <Box bg={useColorModeValue("white", "black")} p={10}>
        <Heading
          as={"h1"}
          textAlign={"center"}
          fontSize={28}
          fontFamily={"sans-serif"}
        >
          Get a free, no-obligation quote
        </Heading>
        <Text
          as={"p"}
          fontSize={14}
          fontFamily={"sans-serif"}
          textAlign={"center"}
        >
          Pest, Termite, and Mosquito control quotes are now available via
          email, text, or phone. Quotes on other Burks Pest Control services
          require a free, on-site inspection to determine the proper treatment
          plan for your property.
        </Text>
        <Box visibility={{ base: "hidden", sm: "visible" }} aria-hidden="true">
          <Box py={5}>
            <Box
              borderTop="solid 1px"
              borderTopColor={useColorModeValue("gray.200", "whiteAlpha.200")}
            ></Box>
          </Box>
        </Box>

        <Box mt={[10, 0]}>
          <SimpleGrid
            display={{ base: "initial", md: "grid" }}
            columns={{ md: 2 }}
            spacing={{ md: 6 }}
          >
            <GridItem mt={[5, null, 0]} colSpan={{ md: 2 }}>
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
                  borderColor={useColorModeValue("gray.200", "white")}
                  borderWidth={"1px"}
                  borderRadius={"6px"}
                  spacing={6}
                >
                  <Heading fontSize="lg" fontWeight="medium" lineHeight="6" fontFamily={"sans-serif"}>
                    Name <strong>*</strong>
                  </Heading>
                  <Divider />
                  <SimpleGrid columns={6} spacing={6}>
                    <FormControl as={GridItem} colSpan={[6, 3]}>
                      <FormLabel
                        htmlFor="first_name"
                        fontSize="sm"
                        fontWeight="md"
                        color={useColorModeValue("gray.700", "gray.50")}
                      >
                        First name
                      </FormLabel>
                      <Input
                        type="text"
                        name="first_name"
                        id="first_name"
                        autoComplete="given-name"
                        mt={1}
                        focusBorderColor="gray.300"
                        shadow="sm"
                        size="sm"
                        w="full"
                        rounded="md"
                        isRequired
                      />
                    </FormControl>
                    <FormControl as={GridItem} colSpan={[6, 3]}>
                      <FormLabel
                        htmlFor="last_name"
                        fontSize="sm"
                        fontWeight="md"
                        color={useColorModeValue("gray.700", "gray.50")}
                      >
                        Last name
                      </FormLabel>
                      <Input
                        type="text"
                        name="last_name"
                        id="last_name"
                        autoComplete="family-name"
                        mt={1}
                        focusBorderColor="brand.400"
                        shadow="sm"
                        size="sm"
                        w="full"
                        rounded="md"
                        isRequired
                      />
                    </FormControl>
                    <Heading
                      as={GridItem}
                      colSpan={6}
                      fontSize="lg"
                      fontWeight="medium"
                      lineHeight="6"
                      fontFamily={"sans-serif"}
                    >
                      Contact Information <strong>*</strong>
                    </Heading>
                    <Divider as={GridItem} colSpan={6} borderColor={"white"} />
                    <FormControl as={GridItem} colSpan={6}>
                      <FormLabel
                        htmlFor="street_address"
                        fontSize="sm"
                        fontWeight="md"
                        color={useColorModeValue("gray.700", "gray.50")}
                      >
                        Address
                      </FormLabel>
                      <Input
                        type="text"
                        name="street_address"
                        id="street_address"
                        autoComplete="street-address"
                        mt={1}
                        focusBorderColor="brand.400"
                        shadow="sm"
                        size="sm"
                        w="full"
                        rounded="md"
                        isRequired
                      />
                    </FormControl>
                    <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                      <FormLabel
                        htmlFor="city"
                        fontSize="sm"
                        fontWeight="md"
                        color={useColorModeValue("gray.700", "gray.50")}
                      >
                        City
                      </FormLabel>
                      <Input
                        type="text"
                        name="city"
                        id="city"
                        autoComplete="city"
                        mt={1}
                        focusBorderColor="brand.400"
                        shadow="sm"
                        size="sm"
                        w="full"
                        rounded="md"
                        isRequired
                      />
                    </FormControl>
                    <FormControl as={GridItem} colSpan={[6, 3, null, 1]}>
                      <FormLabel
                        htmlFor="state"
                        fontSize="sm"
                        fontWeight="md"
                        color={useColorModeValue("gray.700", "gray.50")}
                      >
                        State / Province
                      </FormLabel>
                      <Select
                        name="state"
                        id="state"
                        autoComplete="state"
                        mt={1}
                        focusBorderColor="brand.400"
                        shadow="sm"
                        size="sm"
                        w="full"
                        rounded="md"
                        defaultValue={'TN'}
                        isRequired
                      >
                        {states.map((states, id) => (
                          <option key={id} value={states.abbreviation}>
                            {states.name}
                          </option>
                        ))}
                      </Select>
                    </FormControl>
                    <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                      <FormLabel
                        htmlFor="postal_code"
                        fontSize="sm"
                        fontWeight="md"
                        color={useColorModeValue("gray.700", "gray.50")}
                      >
                        ZIP / Postal
                      </FormLabel>
                      <Input
                        type="text"
                        name="postal_code"
                        id="postal_code"
                        autoComplete="postal-code"
                        mt={1}
                        focusBorderColor="brand.400"
                        shadow="sm"
                        size="sm"
                        w="full"
                        rounded="md"
                        isRequired
                      />
                    </FormControl>
                    <FormControl as={GridItem} colSpan={[6, 4]}>
                      <FormLabel
                        htmlFor="phone_number"
                        fontSize="sm"
                        fontWeight="md"
                        color={useColorModeValue("gray.700", "gray.50")}
                      >
                        Phone
                      </FormLabel>
                      <InputGroup>
                        <InputLeftAddon
                          bg={useColorModeValue("yellow.500", "yellow.500")}
                        > 
                          <PhoneIcon
                            color={useColorModeValue("black", "black")}
                          />
                        </InputLeftAddon>
                        <Input
                          type="tel"
                          name="phone_number"
                          id="phone_number"
                          autoComplete="phone"
                          mt={1}
                          focusBorderColor="brand.400"
                          shadow="sm"
                          size="sm"
                          w="full"
                          rounded="md"
                          isRequired
                        />
                      </InputGroup>
                    </FormControl>
                    <FormControl as={GridItem} colSpan={[6, 4]}>
                      <FormLabel
                        htmlFor="email_address"
                        fontSize="sm"
                        fontWeight="md"
                        color={useColorModeValue("gray.700", "gray.50")}
                      >
                        Email address
                      </FormLabel>
                      <Input
                        type="text"
                        name="email_address"
                        id="email_address"
                        autoComplete="email"
                        mt={1}
                        focusBorderColor="brand.400"
                        shadow="sm"
                        size="sm"
                        w="full"
                        rounded="md"
                        isRequired
                      />
                    </FormControl>
                    <FormControl as={GridItem} colSpan={[6, 3, null, 4]}>
                      <FormLabel
                        htmlFor="preferContact"
                        fontSize="sm"
                        fontWeight="md"
                        color={useColorModeValue("gray.700", "gray.50")}
                      >
                        How would you prefer us to contact you?
                      </FormLabel>
                      <Select
                        name="preferContact"
                        id="preferContact"
                        autoComplete="preferContact"
                        mt={1}
                        focusBorderColor="brand.400"
                        shadow="sm"
                        size="sm"
                        w="full"
                        rounded="md"
                        isRequired
                      >
                        <option value={"Phone"}>Phone</option>
                        <option value={"Email"}>Email</option>
                      </Select>
                    </FormControl>
                    <Heading
                      as={GridItem}
                      colSpan={6}
                      fontSize="lg"
                      fontWeight="medium"
                      lineHeight="6"
                      fontFamily={"sans-serif"}
                    >
                      Current Pest Issues <strong>*</strong>
                    </Heading>
                    <Divider as={GridItem} colSpan={6} borderColor={"white"} />
                    <Heading
                      as={GridItem}
                      colSpan={6}
                      fontSize="sm"
                      fontWeight="medium"
                      lineHeight="6"
                      fontFamily={"sans-serif"}
                    >
                      Burks Service Options <strong>*</strong>
                    </Heading>
                    <CheckboxGroup>
                      <Stack
                        direction={{
                          base: "column-reverse",
                          md: "column",
                          lg: "row",
                        }}
                        spacing={{ base: "12", md: "8" }}
                      >
                        <Stack direction="row" spacing="8">
                          <Stack spacing="4" minW="40" flex="1">
                            <Stack spacing="3" shouldWrapChildren>
                              <Checkbox size={'lg'} colorScheme={'yellow'} value={'Pest Control'} defaultChecked={null} onBlur={null} checked={null}>Pest Control</Checkbox>
                              <Checkbox size={'lg'} colorScheme={'yellow'} value={'Mosquito Control'} defaultChecked={null} onBlur={null} checked={null}>Mosquito Control</Checkbox>
                              <Checkbox size={'lg'} colorScheme={'yellow'} value={'Other'} defaultChecked={null} onBlur={null} checked={null}>Other</Checkbox>
                            </Stack>
                          </Stack>
                          <Stack spacing="4" minW="44" flex="1">
                            <Stack spacing="3" shouldWrapChildren>
                              <Checkbox size={'lg'} colorScheme={'yellow'} value={'Termite Control'} defaultChecked={null} onBlur={null} checked={null}>Termite Control</Checkbox>
                              <Checkbox size={'lg'} colorScheme={'yellow'} value={'Bed Bug Removal'} defaultChecked={null} onBlur={null} checked={null}>Bed Bug Removal</Checkbox>
                              <Checkbox size={'lg'} colorScheme={'yellow'} value={'Not Sure'} defaultChecked={null} onBlur={null} checked={null}>Not Sure</Checkbox>
                            </Stack>
                          </Stack>
                        </Stack>
                      </Stack>
                    </CheckboxGroup>
                  </SimpleGrid>
                </Stack>
                <Box
                  px={{ base: 4, sm: 1 }}
                  py={3}
                  borderRadius={5}
                  bg={useColorModeValue("white", "black")}
                  textAlign={"center"}
                >
                  <Button
                    type="submit"
                    colorScheme="brand"
                    _focus={{ shadow: "" }}
                    fontWeight="md"
                    bg={useColorModeValue("yellow.500", "yellow.500")}
                    color={useColorModeValue("black", "black")}
                  >
                    Get My Quote
                  </Button>
                </Box>
              </chakra.form>
            </GridItem>
          </SimpleGrid>
        </Box>
      </Box>
    </>
  );
}
