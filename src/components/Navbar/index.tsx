/* eslint-disable react-hooks/rules-of-hooks */
import { ReactNode, ReactText } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useBreakpointValue,
  Image,
  Drawer,
  DrawerContent,
  Text,
  CloseButton,
  BoxProps,
  Icon,
  FlexProps,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons';

import { FiHome, FiBook, FiShoppingCart, FiPhone } from 'react-icons/fi';
import { IconType } from 'react-icons';

const Links = [
  { name: 'Home', href: '#home' },
  { name: 'Sobre nós', href: '#sobre' },
  { name: 'Produtos', href: '#produtos' },
  { name: 'Fale conosco', href: '#fale conosco' },
];

const NavLink = ({ children, href }: { children: ReactNode; href: string }) => (
  <Link
    px={2}
    py={1}
    fontWeight="bold"
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: 'gray.50',
    }}
    href={href}
  >
    {children}
  </Link>
);

export function Navbar() {
  const showButton = useBreakpointValue({
    sm: false,
    md: true,
    lg: true,
  });

  const buttonSize = useBreakpointValue({
    base: 'sm',
    md: 'md',
    lg: 'lg',
  });

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg="transparent" py={2} px={4}>
        <Flex
          h={16}
          alignItems={'center'}
          justifyContent={'space-between'}
          maxWidth={1440}
          mx="auto"
        >
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <Image
            src="logo.png"
            width="80px"
            height="80px"
            alt="MP pré moldados"
          />
          <HStack spacing={8} alignItems={'center'}>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              {Links.map((link) => (
                <NavLink key={link.href} href={link.href}>
                  {link.name}
                </NavLink>
              ))}
            </HStack>
          </HStack>
          {showButton && (
            <Flex alignItems={'center'}>
              <Button
                variant={'solid'}
                bg="#193B4B"
                size={buttonSize}
                as="a"
                target="_blank"
                href="https://api.whatsapp.com/send?phone=5561995200297"
                color="white"
              >
                Faça seu orçamento
              </Button>
            </Flex>
          )}
        </Flex>

        {isOpen && (
          <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
            <SidebarContent
              onClose={() => onClose}
              display={{ base: 'none', md: 'block' }}
            />
            <Drawer
              autoFocus={false}
              isOpen={isOpen}
              placement="left"
              onClose={onClose}
              returnFocusOnClose={false}
              onOverlayClick={onClose}
              size="full"
            >
              <DrawerContent>
                <SidebarContent onClose={onClose} />
              </DrawerContent>
            </Drawer>
            <Box ml={{ base: 0, md: 60 }} p="4">
              <Text>Pedro</Text>
            </Box>
          </Box>
        )}
      </Box>
    </>
  );
}
const LinkItems = [
  { name: 'Home', icon: FiHome },
  { name: 'Sobre nós', icon: FiBook },
  { name: 'Produtos', icon: FiShoppingCart },
  { name: 'Fale conosco', icon: FiPhone },
];

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: ReactText;
}

const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
  return (
    <Link
      href="#"
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Image
          src="logo.png"
          width="60px"
          height="60px"
          alt="MP pré moldados"
        />
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};
