import React from 'react'
import { Button, Checkbox, Flex, FormControl, Heading, Input, Link, Stack, Image, Text, InputGroup, InputRightElement, useColorModeValue } from '@chakra-ui/react';
import { FaEyeSlash } from 'react-icons/fa'
import { FiEye } from 'react-icons/fi'
import SignInSocial from '../SignInSocialLayout/SignInSocial';

export default function SignIn() {
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

    return (
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }} background={useColorModeValue('white', 'black')}>
        <Flex p={8} flex={1} align={'center'} justify={'center'} order={2} sx={{
          ".css-3ctlsy>*:not(style)~*:not(style)": {
            marginInlineStart: "0rem",
            WebkitMarginStart: "0rem"
          },
        }}
        >
          <Stack spacing={4} w={'full'} maxW={'md'}>
            <Heading fontSize={'2xl'}>Sign in to your account</Heading>
            <Text fontSize={'lg'} color={'gray.400'}>Don't have an account? <Link color={'blue.400'} href="/signup">Sign Up</Link> 🕷️
            </Text>
              <FormControl id="email">
                <Input type="email" placeholder="Email Address" />
              </FormControl>
              <InputGroup size="md">
                <FormControl id="password">
                  <Input type={show ? "text" : "password"} placeholder="Password" />
                  <InputRightElement width="4.5rem" pt="6px">
                    <Button h="1.75rem" size="sm" onClick={handleClick}>
                      {show ? <FaEyeSlash /> : <FiEye />}
                    </Button>
                  </InputRightElement>
                </FormControl>
              </InputGroup>
            <Stack spacing={6}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox colorScheme="yellow">Remember me</Checkbox>
                <Link color={'blue.500'}>Forgot password?</Link>
              </Stack>
              <Button colorScheme={'blue'} variant={'solid'}>
                Sign in
              </Button>
              <SignInSocial />
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1} order={1} m={0}>
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            src={
              'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
            }
          />
        </Flex>
      </Stack>
    );
}