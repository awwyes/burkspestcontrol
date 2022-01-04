import React from 'react'
import { Box, Text } from '@chakra-ui/react'

export default function Logo(props) {
    return (
        <Box {...props}>
            <Text ml={{base: 5}} fontSize="lg" fontWeight="bold">
                Burks Pest Control
            </Text>
        </Box>
    )
}