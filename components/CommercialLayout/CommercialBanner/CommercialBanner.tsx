import { Box, Alert, AlertIcon, AlertDescription, useColorModeValue } from '@chakra-ui/react'
import NextLink from 'next/link'

export default function CommercialBanner() {
    return (
        <Box>
            <Alert bgColor={useColorModeValue('blue.100', 'blue.600')} status='info' textAlign={'center'} paddingTop={1} paddingBottom={1}>
            <AlertIcon />
            <Box flex='1'>
                <AlertDescription display='block' fontSize={'xl'}>
                    You are currently in Commercial Pest Control, <NextLink href="/residential" passHref>Click Here</NextLink> for Residential Pest Control.
                </AlertDescription>
            </Box>
            </Alert>
        </Box>
    )
}