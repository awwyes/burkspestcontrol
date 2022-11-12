import { ButtonGroup, ButtonGroupProps, IconButton, useColorModeValue } from '@chakra-ui/react'
import { FaFacebook, FaTiktok, FaTwitter } from 'react-icons/fa'

export default function SocialMediaLinks (props: ButtonGroupProps) {
    return (
    <ButtonGroup variant="ghost" color="gray.600" {...props}>
        <IconButton as="a" _hover={{backgroundColor: useColorModeValue('transparent', 'transparent'), color: useColorModeValue('black', 'yellow.500')}} href="https://www.facebook.com/BurksPestControl/" aria-label="Facebook" icon={<FaFacebook fontSize="20px" />} />
        <IconButton as="a" _hover={{backgroundColor: useColorModeValue('transparent', 'transparent'), color: useColorModeValue('black', 'yellow.500')}} href="https://twitter.com/Burkspestcont" aria-label="Twitter" icon={<FaTwitter fontSize="20px" />} />
        <IconButton as="a" _hover={{backgroundColor: useColorModeValue('transparent', 'transparent'), color: useColorModeValue('black', 'yellow.500')}} href="https://www.tiktok.com/@burkspestcontrol/" aria-label="TikTok" icon={<FaTiktok fontSize="20px" />} />
    </ButtonGroup>
    )
}