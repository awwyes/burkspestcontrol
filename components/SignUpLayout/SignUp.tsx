import { Flex, Box, FormControl, FormLabel, Input, InputGroup, InputRightElement, Checkbox, Stack, Link, Button, Heading, Text, useColorModeValue,} from '@chakra-ui/react';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import React from 'react';

export default function SignUp() {
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)
  return (
    <Formik
      initialValues={{ firstName: '', lastName: '', email: '', password: '', confirmPassword: '', acceptedTerms: false }}
      validationSchema={Yup.object({
        firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
        lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.string()
          .max(8, 'Password must be 8 characters')
          .required('Required'),
        confirmPassword: Yup.string()
          .max(8, 'Confirm password must match')
          .email('Email Addresses do not match')
          .required('Required'),
        acceptedTerms: Yup.boolean()
          .required('Required')
          .oneOf([true], 'You must accept the terms and conditions.'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form>
        <Flex
          minH={'100%'}
          w={'100%'}
          align={'center'}
          justify={'center'}
          bg={useColorModeValue('white', 'black')}>
          <Stack spacing={8} mx={'auto'} maxW={'lg'} pt={8}>
            <Stack align={'center'}>
              <Heading fontSize={'4xl'} color={useColorModeValue('black', 'yellow.500')}>Create your account</Heading>
              <Text fontSize={'lg'} color={useColorModeValue('black', 'yellow.500')}>
                Already have an account? <Link color={'blue.400'} href="/signin">Sign In</Link> 🐜
              </Text>
            </Stack>
            <Box
              rounded={'lg'}
              bg={useColorModeValue('white', 'gray.900')}
              boxShadow={'lg'}
              w={'100%'}
              p={8}>
              <Stack spacing={4}>
                <FormControl id="firstName">
                  <FormLabel htmlFor="firstName">First Name</FormLabel>
                  <Input type="text" placeholder="First Name" />
                  <ErrorMessage name="firstName" />
                </FormControl>
                <FormControl id="lastName">
                  <FormLabel htmlFor="lastName">Last Name</FormLabel>
                  <Input type="text" placeholder="Last Name" />
                  <ErrorMessage name="lastName" />
                </FormControl>
                <FormControl id="email">
                  <FormLabel htmlFor="email">Email Address</FormLabel>
                  <Input type="email" placeholder="Email Address" />
                  <ErrorMessage name="email" />
                </FormControl>
                <InputGroup size="md">
                  <FormControl id="password">
                    <FormLabel htmlFor="password">Password</FormLabel>
                    <Input pr="4.5rem" type={show ? "text" : "password"} placeholder="Password" />
                    <InputRightElement w="4.5rem" pt="2.4rem">
                      <Button h="1.75rem" size="sm" onClick={handleClick} color={useColorModeValue('black', 'black')} _hover={{ bg: useColorModeValue('yellow.500', 'black'), color: useColorModeValue('black', 'yellow.500')}}>
                        {show ? "Hide" : "Show"}
                      </Button>
                    </InputRightElement>
                    <ErrorMessage name="password" />
                  </FormControl>
                </InputGroup>
                <InputGroup size="md">
                  <FormControl id="confirmPassword">
                    <FormLabel htmlFor="confirmPassword">Confirm</FormLabel>
                    <Input pr="4.5rem" type={show ? "text" : "password"} placeholder="Confirm Password" />
                    <InputRightElement w="4.5rem" pt="2.4rem">
                      <Button h="1.75rem" size="sm" onClick={handleClick} color={useColorModeValue('black', 'black')} _hover={{ bg: useColorModeValue('yellow.500', 'black'), color: useColorModeValue('black', 'yellow.500')}}>
                        {show ? "Hide" : "Show"}
                      </Button>
                    </InputRightElement>
                    <ErrorMessage name="confirmPassword" />
                  </FormControl>
                </InputGroup>
                <Stack spacing={10}>
                  <Stack
                    direction={{ base: 'column', sm: 'row' }}
                    align={'start'}
                    justify={'space-between'}>
                    <Checkbox colorScheme="yellow">
                      Accept <Link href="/">Terms and Condition</Link>
                    </Checkbox>
                  </Stack>
                  <Button
                    type='submit'
                    bg={useColorModeValue('black', 'yellow.500')}
                    color={useColorModeValue('yellow.500', 'black')}
                    _hover={{
                      bg: useColorModeValue('yellow.500', 'black'), color: useColorModeValue('black', 'yellow.500'),
                    }}>
                    Sign Up
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Flex>
      </Form>
    </Formik>
  );
}