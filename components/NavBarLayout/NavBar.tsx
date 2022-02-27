import { Box, Flex, Text, IconButton, Button, Stack, Collapse, Icon, Link, Popover, 
  PopoverTrigger, PopoverContent, useColorModeValue, useDisclosure, Circle, Tooltip } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, ChevronDownIcon, ChevronRightIcon, PhoneIcon } from "@chakra-ui/icons";
import DarkModeSwitch from "../DarkModeSwitch";
import Logo from '../LogoLayout/Logo';
import { FaDollarSign } from "react-icons/fa";
import NextLink from 'next/link';

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "black")}
        color={useColorModeValue("black", "yellow.500")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 0, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            color={useColorModeValue("black", "yellow.500")}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Logo />
          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <NextLink href="tel:+1-423-424-9958">
            <Tooltip label="Call Burks Pest Control Today!" aria-label="Click here to call Burks Pest Control Today">
              <Circle
                size="40px"
                bg={useColorModeValue('yellow.500', 'yellow.500')}
                color={"black"}
                alignItems={"center"}
                label="Call Burks Pest Control Today!" 
                fontSize={"md"}
                _hover={{
                  bg: useColorModeValue('black', 'black'),
                  color: "yellow.500"
                }}
              >
                <PhoneIcon />
              </Circle>
            </Tooltip>
          </NextLink>
          <NextLink href="https://burkspestcontrol.securepayments.cardpointe.com/pay?">
            <Tooltip label="Secure Payment to Burks Pest Control" aria-label="Click Here for a secure payment to Burks Pest Control">
              <Circle
                size="40px"
                bg={useColorModeValue('yellow.500', 'yellow.500')}
                color={"black"}
                alignItems={"center"}
                label="Secure Payment to Burks Pest Control"
                fontSize={'md'}
                _hover={{
                  bg: useColorModeValue('black', 'black'),
                  color: "yellow.500"
                }}
              >
                <FaDollarSign />
              </Circle>
            </Tooltip>
          </NextLink>
        </Stack>
        <DarkModeSwitch />
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? "/"}
                fontSize={"sm"}
                fontWeight={500}
                color={useColorModeValue("black", "yellow.500")}
                _hover={{
                  textDecoration: "none",
                  color: useColorModeValue("gray.800", "white"),
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={useColorModeValue("white", "black")}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("yellow.500", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "yellow.500" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"yellow.500"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "black")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("black", "yellow.500")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            color={useColorModeValue("black", "yellow.500")}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} color={useColorModeValue("black", "yellow.500")} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Pest Control",
    href: '/residential/',
  },
  {
    label: "Termites",
    href: "/residential/termites",
  },
  {
    label: "Specialize Services",
    children: [
      {
        label: "Mosquito Control",
        href: "/residential/mosquitos",
      },
      {
        label: "Beg bug Removal",
        href: "/residential/bedbug",
      },
    ],
  },
  {
    label: "Commercial",
    href: "/commercial",
  },
  {
    label: "Contact Us",
    href: "/contactus",
  },
];
