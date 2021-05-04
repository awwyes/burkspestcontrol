import React from 'react'
import { Center, Stack } from '@chakra-ui/react'
import FacebookButton from './Facebook'
import GoogleButton from './Google'

export default function SignInSocial() {
    return (
        <Center p={8}>
            <Stack spacing={2} align={'center'} maxW={'md'} w={'full'}>
                <FacebookButton />
                <GoogleButton />
            </Stack>
        </Center>

    )
}