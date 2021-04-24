import React, { useState } from 'react'
import { Flex, Box, Heading, FormControl, FormLabel, Input, Button } from '@chakra-ui/react'
import NavMenu from '../components/NavMenu'

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = event => {
        event.preventDefault();
        alert(`Email: ${email} & Password: ${password}`);
    }
    return (
        <>
        <NavMenu />
        <Flex width="full" align="center" justifyContent="center">
            <Box mt={60} p={8} maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow="lg">
                <Box textAlign="center">
                    <Heading>Login</Heading>
                </Box>
                <Box my={4} textAlign="left">
                    <form onSubmit={handleSubmit}>
                        <FormControl isRequired>
                            <FormLabel>Email</FormLabel>
                            <Input 
                                type="email" 
                                placeholder="Email Address"
                                size="lg"
                                onChange={event => setEmail(event.currentTarget.value)} 
                            />
                        </FormControl>
                        <FormControl mt={6} isRequired>
                            <FormLabel>Password</FormLabel>
                            <Input 
                                type="password" 
                                placeholder="Password"
                                size="lg"
                                onChange={event => setPassword(event.currentTarget.value)}
                            />
                        </FormControl>
                        <Button 
                            width="full" 
                            mt={4} 
                            type="submit" 
                            variant="outline"
                            bg="yellow"
                        >
                            Sign In
                        </Button>
                    </form>
                </Box>
            </Box>
        </Flex>
        </>
    );
}