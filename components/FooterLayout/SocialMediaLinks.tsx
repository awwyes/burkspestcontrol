import { ButtonGroup, ButtonGroupProps, IconButton } from '@chakra-ui/react'
import * as React from 'react'
import { FaFacebook, FaTwitter } from 'react-icons/fa'

export default function SocialMediaLinks (props: ButtonGroupProps) {
    return (
    <ButtonGroup variant="ghost" color="gray.600" {...props}>
        <IconButton as="a" href="https://www.facebook.com/BurksPestControl/" aria-label="Facebook" icon={<FaFacebook fontSize="20px" />} />
        <IconButton as="a" href="https://twitter.com/Burkspestcont" aria-label="Twitter" icon={<FaTwitter fontSize="20px" />} />
    </ButtonGroup>
    )
}