import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useColorMode, Box, IconButton, useColorModeValue } from '@chakra-ui/react';

const DarkModeSwitch = () => {
    const {colorMode, toggleColorMode} = useColorMode()
    return (
        <Box textAlign="right" py={4} ml={5} mr={3}>
            <IconButton 
                aria-label="Toggle Dark Switch"
                icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon /> }
                color={useColorModeValue("black", "yellow.500")}
                onClick={toggleColorMode}
                variant="ghost"
                _hover={{
                    bg: "none"
                }}
                _active={{
                    bg: "none"
                }}
            />
        </Box>
    )
}

export default DarkModeSwitch