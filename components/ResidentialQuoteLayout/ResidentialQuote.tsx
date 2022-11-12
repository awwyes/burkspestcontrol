import { PhoneIcon } from "@chakra-ui/icons";
import { chakra, Box, Text, Stack, Input, Button, Select, Heading, Divider, GridItem, FormLabel,
  Checkbox, SimpleGrid, FormControl, InputGroup, CheckboxGroup, useColorModeValue, InputLeftAddon
} from "@chakra-ui/react";
import { useState } from "react";
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
    console.log("Sending...");

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
      serviceOptions
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
        alert("Message has been sent!")
        setSubmitted(true);
        setFirstName("");
        setLastName("");
        setAddress("");
        setCity("");
        setState("Tennessee");
        setZipCode("");
        setPhone("");
        setEmail("");
        setPreferContact("");
        setServiceOptions([]);
      } else {
        alert('Error please try again');
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
              <FormControl>
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
                    Name
                  </Heading>
                  <Divider />
                  <SimpleGrid columns={6} spacing={6}>
                    <FormControl as={GridItem} colSpan={[6, 3]} isRequired>
                      <FormLabel
                        htmlFor="firstName"
                        fontSize="sm"
                        fontWeight="md"
                        color={useColorModeValue("gray.700", "gray.50")}
                      >
                        First name
                      </FormLabel>
                      <Input
                        type="text"
                        name="firstName"
                        id="firstName"
                        autoComplete="firstName"
                        mt={1}
                        focusBorderColor="gray.300"
                        shadow="sm"
                        size="sm"
                        w="full"
                        rounded="md"
                        isRequired
                      />
                    </FormControl>
                    <FormControl as={GridItem} colSpan={[6, 3]} isRequired>
                      <FormLabel
                        htmlFor="lastName"
                        fontSize="sm"
                        fontWeight="md"
                        color={useColorModeValue("gray.700", "gray.50")}
                      >
                        Last name
                      </FormLabel>
                      <Input
                        type="text"
                        name="lastName"
                        id="lastName"
                        autoComplete="lastName"
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
                      Contact Information
                    </Heading>
                    <Divider as={GridItem} colSpan={6} opacity={'0.6'} borderColor={"lightgray"} />
                    <FormControl as={GridItem} colSpan={6} isRequired>
                      <FormLabel
                        htmlFor="address"
                        fontSize="sm"
                        fontWeight="md"
                        color={useColorModeValue("gray.700", "gray.50")}
                      >
                        Address
                      </FormLabel>
                      <Input
                        type="text"
                        name="address"
                        id="address"
                        autoComplete="address"
                        mt={1}
                        focusBorderColor="brand.400"
                        shadow="sm"
                        size="sm"
                        w="full"
                        rounded="md"
                        isRequired
                      />
                    </FormControl>
                    <FormControl as={GridItem} colSpan={[6, 3, null, 2]} isRequired>
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
                    <FormControl as={GridItem} colSpan={[6, 3, null, 1]} isRequired>
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
                    <FormControl as={GridItem} colSpan={[6, 3, null, 2]} isRequired>
                      <FormLabel
                        htmlFor="zipCode"
                        fontSize="sm"
                        fontWeight="md"
                        color={useColorModeValue("gray.700", "gray.50")}
                      >
                        ZIP / Postal
                      </FormLabel>
                      <Input
                        type="text"
                        name="zipCode"
                        id="zipCode"
                        autoComplete="zipCode"
                        mt={1}
                        focusBorderColor="brand.400"
                        shadow="sm"
                        size="sm"
                        w="full"
                        rounded="md"
                        isRequired
                      />
                    </FormControl>
                    <FormControl as={GridItem} colSpan={[6, 4]} isRequired>
                      <FormLabel
                        htmlFor="phone"
                        fontSize="sm"
                        fontWeight="md"
                        color={useColorModeValue("gray.700", "gray.50")}
                      >
                        Phone
                      </FormLabel>
                      <InputGroup>
                        <InputLeftAddon
                        height={10}
                          bg={useColorModeValue("yellow.500", "yellow.500")}
                        > 
                          <PhoneIcon
                            color={useColorModeValue("black", "black")}
                          />
                        </InputLeftAddon>
                        <Input
                          type="tel"
                          name="phone"
                          id="phone"
                          autoComplete="phone"
                          focusBorderColor="brand.400"
                          shadow="sm"
                          size="sm"
                          height={10}
                          w="full"
                          rounded="md"
                          isRequired
                        />
                      </InputGroup>
                    </FormControl>
                    <FormControl as={GridItem} colSpan={[6, 4]} isRequired>
                      <FormLabel
                        htmlFor="email"
                        fontSize="sm"
                        fontWeight="md"
                        color={useColorModeValue("gray.700", "gray.50")}
                      >
                        Email address
                      </FormLabel>
                      <Input
                        type="email"
                        name="email"
                        id="email"
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
                    <FormControl as={GridItem} colSpan={[6, 3, null, 4]} isRequired>
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
                      Current Pest Issues
                    </Heading>
                    <Divider as={GridItem} colSpan={6} opacity={'0.6'} borderColor={"lightgray"} />
                    <FormControl as={GridItem} colSpan={[6, 3, null, 4]}>
                    <FormLabel
                        htmlFor="serviceOptions"
                        fontSize="md"
                        fontWeight="md"
                        color={useColorModeValue("gray.700", "gray.50")}
                      >
                        How would you prefer us to contact you?
                      </FormLabel>
                    <CheckboxGroup
                      value={serviceOptions}
                      onChange={setServiceOptions}
                    >
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
                              <Checkbox size={'lg'} colorScheme={'yellow'} value={'Pest Control'}>Pest Control</Checkbox>
                              <Checkbox size={'lg'} colorScheme={'yellow'} value={'Mosquito Control'}>Mosquito Control</Checkbox>
                              <Checkbox size={'lg'} colorScheme={'yellow'} value={'Other'}>Other</Checkbox>
                            </Stack>
                          </Stack>
                          <Stack spacing="4" minW="44" flex="1">
                            <Stack spacing="3" shouldWrapChildren>
                              <Checkbox size={'lg'} colorScheme={'yellow'} value={'Termite Control'}>Termite Control</Checkbox>
                              <Checkbox size={'lg'} colorScheme={'yellow'} value={'Bed Bug Removal'}>Bed Bug Removal</Checkbox>
                              <Checkbox size={'lg'} colorScheme={'yellow'} value={'Not Sure'}>Not Sure</Checkbox>
                            </Stack>
                          </Stack>
                        </Stack>
                      </Stack>
                    </CheckboxGroup>
                    </FormControl>
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
                    colorScheme="brand"
                    bg={useColorModeValue("yellow.500", "yellow.500")}
                    color={useColorModeValue("black", "black")}
                    _hover={{
                      bg: 'black',
                      color: 'yellow.500'
                    }}
                    type="submit"
                    onClick={(e) => {
                      handleSubmit(e);
                    }}
                    fontWeight="md"
                  >
                    Get My Quote
                  </Button>
                </Box>
              </FormControl>
            </GridItem>
          </SimpleGrid>
        </Box>
      </Box>
    </>
  );
}
