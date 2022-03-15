/* eslint-disable react-hooks/rules-of-hooks */
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  BoxProps,
  Button,
  chakra,
  CloseButton,
  Drawer,
  DrawerContent,
  Flex,
  FlexProps,
  HStack,
  Icon,
  IconButton,
  Text,
  useBreakpointValue,
  useColorModeValue,
  useDisclosure,
  Image,
} from '@chakra-ui/react';

import Link from 'next/link';
import { ReactNode, ReactText } from 'react';
import { IconType } from 'react-icons';
import { FiBook, FiHome, FiPhone, FiShoppingCart } from 'react-icons/fi';

const Links = [
  { name: 'Home', icon: FiHome, href: '/' },
  { name: 'Produtos', icon: FiShoppingCart, href: '/produto' },
  { name: 'Fale conosco', icon: FiPhone, href: '/contato' },
  { name: 'Sobre nós', icon: FiBook, href: '/sobre' },
];

type NavbarProps = {
  backgroundColor?: string;
  isBorderBottom?: boolean;
};

type NavLinkProps = {
  children: ReactNode;
  href: string;
};

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: ReactText;
  href: string;
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

export function Navbar({
  backgroundColor = 'transparent',
  isBorderBottom = false,
}: NavbarProps) {
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
      <Box bg={backgroundColor} py={2} px={2}>
        <Flex
          h={16}
          alignItems={'center'}
          justifyContent={'space-between'}
          maxWidth={1440}
          mx="auto"
        >
          <IconButton
            bg="transparent"
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={isOpen ? 'Open Menu' : 'Close Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <Link href="/" passHref>
            <Image
              src="/logo.png"
              width="80px"
              height="80px"
              alt="MP pré moldados"
              cursor="pointer"
            />
          </Link>

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
                aria-label="Open Whatsapp"
                href="https://api.whatsapp.com/send?phone=556141027744"
                color="white"
                _hover={{ backgroundColor: '#0f242e' }}
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
          </Box>
        )}
      </Box>
      {isBorderBottom && (
        <Box height="1px" background="#E4E4E4" opacity="0.5"></Box>
      )}
    </>
  );
}

const NavLink = ({ children, href }: NavLinkProps) => (
  <Link href={href} passHref>
    <Text
      fontSize="18px"
      px={4}
      py={1}
      fontWeight="bold"
      rounded={'md'}
      cursor="pointer"
      _hover={{
        textDecoration: 'none',
        bg: 'gray.50',
      }}
    >
      {children}
    </Text>
  </Link>
);

//Menu mobile

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
        <Link href="/" passHref>
          <Image
            src="/logo.png"
            width="60px"
            height="60px"
            alt="MP pré moldados"
          />
        </Link>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {Links.map((link) => (
        <NavItem key={link.name} icon={link.icon} href={link.href}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

const NavItem = ({ icon, children, href, ...rest }: NavItemProps) => {
  return (
    <Link passHref href={href}>
      <Flex
        align="center"
        fontWeight="bold"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'gray.50',
        }}
        {...rest}
      >
        {icon && <Icon mr="4" fontSize="20" as={icon} />}
        {children}
      </Flex>
    </Link>
  );
};
