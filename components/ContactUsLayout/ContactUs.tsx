import { Container, Flex, Box, Heading, Text, IconButton, Button,
        VStack, HStack, Wrap, WrapItem, FormControl, FormLabel,
        Input, InputGroup, InputLeftElement, Textarea, useColorModeValue,
      } from "@chakra-ui/react";
import { MdPhone, MdEmail, MdLocationOn, MdOutlineEmail } from "react-icons/md";
import { BsPerson, BsInstagram, BsTwitter, BsFacebook } from "react-icons/bs";
import React, { useState } from "react";
import NextLink from "next/link";

export default function ContactUs() {
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sending");

    let data = {
      fullname,
      email,
      message,
    };

    fetch("/api/contact", {
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
        setFullName("");
        setEmail("");
        setMessage("");
      }
    });
  };

  return (
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
                  <Heading>Contact</Heading>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                    Fill up the form below to contact
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} alignItems="flex-start">
                      <NextLink href="tel:+1-423-424-9958">
                        <Button
                          size="md"
                          height="48px"
                          width="200px"
                          _active={{
                            bg: useColorModeValue("black", "black"),
                            color: useColorModeValue(
                              "yellow.500",
                              "yellow.500"
                            ),
                          }}
                          _hover={{
                            bg: useColorModeValue("black", "black"),
                            color: useColorModeValue(
                              "yellow.500",
                              "yellow.500"
                            ),
                          }}
                          bg={useColorModeValue("black", "black")}
                          color={useColorModeValue("yellow.500", "yellow.500")}
                          leftIcon={
                            <MdPhone
                              color={useColorModeValue(
                                "yellow.500",
                                "yellow.500"
                              )}
                              size="20px"
                            />
                          }
                        >
                          +1 (423) 424-9958
                        </Button>
                      </NextLink>
                      <NextLink href={"mailto:burkspestcontrol@gmail.com"}>
                        <Button
                          size="md"
                          height="48px"
                          width="200px"
                          _active={{
                            border: "0px solid #fffff",
                            bg: useColorModeValue("black", "black"),
                            color: useColorModeValue(
                              "yellow.500",
                              "yellow.500"
                            ),
                          }}
                          _hover={{
                            bg: useColorModeValue("black", "black"),
                            color: useColorModeValue(
                              "yellow.500",
                              "yellow.500"
                            ),
                          }}
                          bg={useColorModeValue("black", "black")}
                          color={useColorModeValue("yellow.500", "yellow.500")}
                          leftIcon={
                            <MdEmail
                              color={useColorModeValue(
                                "yellow.500",
                                "yellow.500"
                              )}
                              size="20px"
                            />
                          }
                        >
                          burkspestcontrol@gmail.com
                        </Button>
                      </NextLink>
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        _active={{
                          bg: useColorModeValue("black", "black"),
                          color: useColorModeValue("yellow.500", "yellow.500"),
                        }}
                        _hover={{
                          bg: useColorModeValue("black", "black"),
                          color: useColorModeValue("yellow.500", "yellow.500"),
                        }}
                        bg={useColorModeValue("black", "black")}
                        color={useColorModeValue("yellow.500", "yellow.500")}
                        leftIcon={
                          <MdLocationOn
                            color={useColorModeValue(
                              "yellow.500",
                              "yellow.500"
                            )}
                            size="20px"
                          />
                        }
                      >
                        Ooltewah, Tennessee
                      </Button>
                    </VStack>
                  </Box>
                  <HStack
                    mt={{ lg: 10, md: 10 }}
                    spacing={5}
                    px={5}
                    alignItems="flex-start"
                  >
                    <IconButton
                      aria-label="facebook"
                      variant="ghost"
                      size="lg"
                      href="https://www.facebook.com/BurksPestControl/"
                      isRound={true}
                      _hover={{
                        bg: useColorModeValue("yellow.500", "yellow.500"),
                        color: useColorModeValue("black", "black"),
                      }}
                      icon={<BsFacebook size={"28px"} />}
                    />
                    <IconButton
                      aria-label="instagram"
                      variant="ghost"
                      size="lg"
                      href=""
                      isRound={true}
                      _hover={{
                        bg: useColorModeValue("yellow.500", "yellow.500"),
                        color: useColorModeValue("black", "black"),
                      }}
                      icon={<BsInstagram size="28px" />}
                    />
                    <IconButton
                      aria-label="twitter"
                      variant="ghost"
                      size="lg"
                      href="https://twitter.com/Burkspestcont"
                      isRound={true}
                      _hover={{
                        bg: useColorModeValue("yellow.500", "yellow.500"),
                        color: useColorModeValue("black", "black"),
                      }}
                      icon={<BsTwitter size="28px" />}
                    />
                  </HStack>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box bg="white" borderRadius="lg">
                  <Box m={8} color="#0B0E3F">
                    <VStack spacing={5}>
                      <FormControl id="name" action="/api/contact">
                        <FormLabel>Your Name</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<BsPerson color="gray.800" />}
                          />
                          <Input
                            type="text"
                            size="md"
                            value={fullname}
                            onChange={(e) => {
                              setFullName(e.target.value);
                            }}
                          />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="email" action="/api/contact">
                        <FormLabel>Email</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<MdOutlineEmail color="gray.800" />}
                          />
                          <Input
                            type="email"
                            size="md"
                            name="email"
                            value={email}
                            onChange={(e) => {
                              setEmail(e.target.value);
                            }}
                          />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="message" action="/api/contact">
                        <FormLabel>Message</FormLabel>
                        <Textarea
                          name="message"
                          value={message}
                          onChange={(e) => {
                            setMessage(e.target.value);
                          }}
                          borderColor="gray.300"
                          _hover={{
                            borderRadius: "gray.300",
                          }}
                          placeholder="message"
                        />
                      </FormControl>
                      <FormControl id="name" float="right">
                        <Button
                          variant="solid"
                          type="submit"
                          onClick={(e) => {
                            handleSubmit(e);
                          }}
                          bg={useColorModeValue("yellow.500", "yellow.500")}
                          color={useColorModeValue("black", "black")}
                          _hover={{
                            color: useColorModeValue(
                              "yellow.500",
                              "yellow.500"
                            ),
                            bg: useColorModeValue("black", "black"),
                          }}
                        >
                          Send Message
                        </Button>
                      </FormControl>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}