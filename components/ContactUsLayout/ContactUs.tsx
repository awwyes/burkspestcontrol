import { Box, Button, Flex, FormControl, FormLabel, Heading, IconButton, Input, InputGroup,
  InputLeftElement, Link, Stack, Textarea, Tooltip, useColorModeValue, VStack } from '@chakra-ui/react';
import { MdOutlineEmail } from "react-icons/md";
import { BsPerson, BsTwitter, BsFacebook } from "react-icons/bs";
import { FaTiktok } from 'react-icons/fa';
import { useState } from "react";

export default function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sending");

    let data = {
      name,
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
        alert("Message has been sent!")
        console.log("Response succeeded!");
        setSubmitted(true);
        setName("");
        setEmail("");
        setMessage("");
      }
    });
  };

  return (
    <Flex
      bg={useColorModeValue('white', 'black')}
      align="center"
      justify="center"
      id="contact">
      <Box
        borderRadius="lg"
        m={{ base: 5, md: 16, lg: 10 }}
        p={{ base: 5, lg: 16 }}>
        <Box>
          <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
            <Heading
              fontSize={{
                base: '4xl',
                md: '5xl',
              }}
              as={'h1'}
              fontFamily={'sans-serif'}
              color={useColorModeValue('black', 'yellow.500')}>
              Get in Touch
            </Heading>

            <Stack
              spacing={{ base: 4, md: 8, lg: 20 }}
              direction={{ base: 'column', md: 'row' }}>
              <Stack
                align="center"
                justify="space-around"
                direction={{ base: 'row', md: 'column' }}>
                
                <Tooltip
                  label={''}
                  closeOnClick={false}
                  hasArrow>
                  <Link href='https://www.facebook.com/BurksPestControl/'>
                  <IconButton
                    aria-label="facebook"
                    variant="ghost"
                    size="lg"
                    fontSize="3xl"
                    icon={<BsFacebook />}
                    color={useColorModeValue('black', 'yellow.500')}
                    _hover={{
                      bg: useColorModeValue('black', 'yellow.500'),
                      color: useColorModeValue('yellow.500', 'black'),
                    }}
                    isRound
                  />
                  </Link>
                </Tooltip>

                <Link href="https://twitter.com/Burkspestcont">
                  <IconButton
                    aria-label="twitter"
                    variant="ghost"
                    size="lg"
                    icon={<BsTwitter size="28px" />}
                    color={useColorModeValue('black', 'yellow.500')}
                    _hover={{
                      bg: useColorModeValue('black', 'yellow.500'),
                      color: useColorModeValue('yellow.500', 'black'),
                    }}
                    isRound
                  />
                </Link>

                <Link href="#">
                  <IconButton
                    aria-label="tiktok"
                    variant="ghost"
                    size="lg"
                    icon={<FaTiktok size="28px" />}
                    color={useColorModeValue('black', 'yellow.500')}
                    _hover={{
                      bg: useColorModeValue('black', 'yellow.500'),
                      color: useColorModeValue('yellow.500', 'black'),
                    }}
                    isRound
                  />
                </Link>
              </Stack>

              <Box
                bg={useColorModeValue('black', 'white')}
                borderRadius="lg"
                p={8}
                color={useColorModeValue('white', 'black')}
                shadow="base">
                <VStack spacing={5}>
                  <FormControl id="name" isRequired>
                    <FormLabel>Name</FormLabel>

                    <InputGroup>
                      <InputLeftElement>
                        <BsPerson />
                      </InputLeftElement>
                      <Input 
                        type="text" 
                        name="name" 
                        placeholder="Your Name"
                        borderColor={useColorModeValue('yellow.500', 'gray.800')}
                        borderWidth={'thin'}
                        _placeholder={{ color: useColorModeValue('white', 'black')}} 
                        color={useColorModeValue('black', 'black')} 
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                      />
                    </InputGroup>
                  </FormControl>

                  <FormControl id="email" isRequired>
                    <FormLabel>Email</FormLabel>

                    <InputGroup>
                      <InputLeftElement>
                        <MdOutlineEmail />
                      </InputLeftElement>
                      <Input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        borderColor={useColorModeValue('yellow.500', 'gray.800')}
                        borderWidth={'thin'}
                        _placeholder={{ color: useColorModeValue('white', 'black')}} 
                        color={useColorModeValue('black', 'black')}
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                    </InputGroup>
                  </FormControl>

                  <FormControl id="message" isRequired>
                    <FormLabel>Message</FormLabel>

                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      rows={6}
                      resize="none"
                      borderColor={useColorModeValue('yellow.500', 'gray.800')}
                      borderWidth={'thin'}
                      _placeholder={{ color: useColorModeValue('white', 'black')}} 
                      color={useColorModeValue('black', 'black')}
                      value={message}
                      onChange={(e) => {
                        setMessage(e.target.value);
                      }}
                    />
                  </FormControl>

                  <Button
                    colorScheme="yellow.500"
                    bg="yellow.500"
                    color={useColorModeValue('black', 'black')}
                    _hover={{
                      bg: 'black',
                      color: 'yellow.500'
                    }}
                    type="submit"
                    onClick={(e) => {
                      handleSubmit(e);
                    }}
                    isFullWidth>
                    Send Message
                  </Button>
                </VStack>
              </Box>
            </Stack>
          </VStack>
        </Box>
      </Box>
    </Flex>
  );
}