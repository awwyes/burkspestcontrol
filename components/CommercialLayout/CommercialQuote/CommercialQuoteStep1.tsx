import { Box, Checkbox, Divider, Flex, FlexProps, FormControl, Heading, SimpleGrid, useColorModeValue } from "@chakra-ui/react";

export default function Step1() {
    return (
        <Flex>
             <Box bgColor={useColorModeValue('white', 'black')}>
                <Heading as={'h1'} fontSize={'3xl'} fontFamily={'sans-serif'} mt={6} ml={10}>Please tell us a little more about your commercial facility needs. *</Heading>
                <Divider />
                <SimpleGrid columns={[2, null, 2]} spacing='20px' mt={4}>
                    <Box ml={10}>
                        <Checkbox colorScheme={'yellow'}>New construction</Checkbox>
                    </Box>
                    <Box ml={10}>
                        <Checkbox colorScheme={'yellow'}>Failed an Audit</Checkbox>
                    </Box>
                    <Box ml={10}>
                        <Checkbox colorScheme={'yellow'}>Displeased with current provider</Checkbox>
                    </Box>
                    <Box ml={10}>
                        <Checkbox colorScheme={'yellow'}>Other</Checkbox>
                    </Box>
                </SimpleGrid>
                <br />
                <Heading as={'h1'} fontSize={'3xl'} fontFamily={'sans-serif'} mt={6} ml={10}>What would you like us to provide? *</Heading>
                <Divider />
                <SimpleGrid columns={[2, null, 2]} spacing='20px' mt={4}>
                    <Box ml={10}>
                        <Checkbox colorScheme={'yellow'}>I’d like a free audit to evaluate our current provider</Checkbox>
                    </Box>
                    <Box ml={10}>
                        <Checkbox colorScheme={'yellow'}>We’ve already decided to switch. I’d like a bid from Burks Pest Control for my facility.</Checkbox>
                    </Box>
                    <Box ml={10}>
                        <Checkbox colorScheme={'yellow'}>Other</Checkbox>
                    </Box>
                </SimpleGrid>
            </Box>
        </Flex>
    )
}