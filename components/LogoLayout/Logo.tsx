import React from 'react'
import NextLink from 'next/link';
import { Box, Text } from '@chakra-ui/react'

export default function Logo(props) {
    return (
        <Box {...props}>
            <Text ml={{base: 5}} fontSize="lg" fontWeight="bold">
                <NextLink href="/">
                    Burks Pest Control
                </NextLink>
            </Text>
        </Box>
    )
}