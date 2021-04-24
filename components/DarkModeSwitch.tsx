import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useColorMode, Box, IconButton } from '@chakra-ui/react';

const DarkModeSwitch = () => {
    const {colorMode, toggleColorMode} = useColorMode()
    return (
        <Box textAlign="right" py={4} mr={12}>
            <IconButton 
                aria-label="Toggle Dark Switch"
                icon={colorMode === 'light' ? <MoonIcon />  : <SunIcon /> }
                onClick={toggleColorMode}
                variant="ghost"
            />
        </Box>
    )
}

export default DarkModeSwitch