import { ChevronDownIcon } from "@chakra-ui/icons"
import Link from 'next/link';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuIcon,
    MenuCommand,
    MenuDivider,
    Button,
    HStack,
    Text
  } from "@chakra-ui/react"
import DarkModeSwitch from "./DarkModeSwitch"

export default function NavMenu() {
    return (
        <HStack 
            as="header"
        >
            <Menu>
                <MenuButton as={Button}>
                    <Text>Home</Text>
                </MenuButton>
                <MenuDivider />
                <MenuButton as={Button}>
                    About
                </MenuButton>
                <MenuDivider />
                <MenuButton as={Button}>
                    Services
                </MenuButton>
                <MenuDivider />
                    <Link href="/login" passHref>
                        <a>Login</a>
                    </Link>
                <DarkModeSwitch />
            </Menu>
        </HStack>
    )
}