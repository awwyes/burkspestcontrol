import { Box, Text, useColorModeValue, Container, Flex, Wrap, WrapItem, Heading } from "@chakra-ui/react";
import React, { useState } from "react";

export default function Quote() {
  const [submitted, setSubmitted] = useState(false);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    phone: "",
    email: "",
    preferContact: "",
    serviceOptions: ["Pest Control"],
  });
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sending Info");

   let data = {
     formValues
   }

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
      <Box
        textAlign="center"
        py={10}
        px={6}
        bg={useColorModeValue("white", "black")}
      >
        <Heading as="h2" size="xl" mt={6} mb={2} fontFamily={"sans-serif"}>
          Get a free, no-obligation quote
        </Heading>
        <Text color={"gray.500"} px={6} size={"lg"}>
          Pest, Termite, and Mosquito control quotes are now available via
          email, text, or phone.
          <br />
          Quotes on other Burks Pest Control services require a free, on-site
          inspection to determine the proper treatment plan for your property.
        </Text>
      </Box>
      <Container
      bg={useColorModeValue("white", "black")}
      maxW="full"
      mt={0}
      centerContent
      overflow="hidden"
    >
      <Flex>
      <Box
          bg={useColorModeValue("black", "black")}
          color="white"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}
        >
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box>
                  <Heading>Name</Heading>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
    </>
  );
}
