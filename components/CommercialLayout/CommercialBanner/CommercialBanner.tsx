import { Box, Alert, AlertIcon, AlertDescription } from '@chakra-ui/react'
import NextLink from 'next/link'

export default function CommercialBanner() {
    return (
        <Box background={'rgba(255, 255, 255, -1)'}>
            <Alert status='info' textAlign={'center'}>
            <AlertIcon />
            <Box flex='1'>
                <AlertDescription display='block' fontSize={'xl'}>
                    You are currently in Commercial Pest Control, <NextLink passHref href="/residential">Click Here</NextLink> for Residential Pest Control.
                </AlertDescription>
            </Box>
            </Alert>
        </Box>
    )
}