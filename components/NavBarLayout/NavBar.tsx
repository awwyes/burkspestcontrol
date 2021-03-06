import { Box, Flex, Text, IconButton, Stack, Collapse, Icon, Link, Popover, Circle,
  PopoverTrigger, PopoverContent, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, ChevronDownIcon, ChevronLeftIcon, PhoneIcon } from "@chakra-ui/icons";
import DarkModeSwitch from "../DarkModeSwitch";
import Logo from '../LogoLayout/Logo';
import { FaDollarSign } from "react-icons/fa";
import NextLink from 'next/link';

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();
  const backgroundColor = useColorModeValue("white", "black");

  return (
    <Box>
      <Flex
        bg={backgroundColor}
        color={useColorModeValue("black", "yellow.500")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("black", "black")}
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
          <NextLink passHref href="tel:+1-423-424-9958">
              <Circle
                size="40px"
                bg={useColorModeValue('yellow.500', 'yellow.500')}
                color={"black"}
                alignItems={"center"}
                fontSize={"md"}
                _hover={{
                  bg: useColorModeValue('black', 'black'),
                  color: "yellow.500"
                }}
              >
                <PhoneIcon />
              </Circle>
          </NextLink>
          <NextLink passHref href="https://burkspestcontrol.securepayments.cardpointe.com/pay?">
              <Circle
                size="40px"
                bg={useColorModeValue('yellow.500', 'yellow.500')}
                color={"black"}
                alignItems={"center"}
                fontSize={'md'}
                _hover={{
                  bg: useColorModeValue('black', 'black'),
                  color: "yellow.500"
                }}
              >
                <FaDollarSign />
              </Circle>
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
  const backgroundColor = useColorModeValue("white", "black");
  const yellowAndBlack = useColorModeValue('yellow.500', 'black');

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label} bg={backgroundColor}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? "/"}
                fontSize={"sm"}
                fontWeight={500}
                _hover={{
                  textDecoration: "none",
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                bgColor={yellowAndBlack}
                boxShadow={"xl"}
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
      _hover={{ bg: useColorModeValue("yellow.500", "black") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: useColorModeValue("black", 'white') }}
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
          <Icon color={useColorModeValue("black", 'white')} w={5} h={5} as={ChevronLeftIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  const backgroundColor = useColorModeValue("white", "black");
  
  return (
    <Stack
      bg={backgroundColor}
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
          borderColor={useColorModeValue("black", "black")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
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
