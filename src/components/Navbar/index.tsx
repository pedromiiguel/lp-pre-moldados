/* eslint-disable react-hooks/rules-of-hooks */
import { ReactNode, ReactText } from 'react';
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  useBreakpointValue,
  Drawer,
  DrawerContent,
  Text,
  CloseButton,
  BoxProps,
  Icon,
  FlexProps,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

import { FiHome, FiBook, FiShoppingCart, FiPhone } from 'react-icons/fi';
import { IconType } from 'react-icons';
import Link from 'next/link';
import Image from 'next/image';

const Links = [
  { name: 'Home', href: '/' },
  { name: 'Sobre nós', href: '/sobre' },
  { name: 'Produtos', href: '/produto' },
  { name: 'Fale conosco', href: '/contato' },
];

const NavLink = ({ children, href }: { children: ReactNode; href: string }) => (
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

export function Navbar({
  backgroundColor,
  isBorderBottom = false,
}: {
  backgroundColor: string;
  isBorderBottom?: boolean;
}) {
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
      <Box bg={backgroundColor} py={2} px={4}>
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
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <Link href="/" passHref>
            <Image
              src="/logo.png"
              width="80px"
              height="80px"
              alt="MP pré moldados"
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
                href="https://api.whatsapp.com/send?phone=5561995200297"
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
            <Box ml={{ base: 0, md: 60 }} p="4">
              <Text>Pedro</Text>
            </Box>
          </Box>
        )}
      </Box>
      {isBorderBottom && (
        <Box height="1px" background="#E4E4E4" opacity="0.5"></Box>
      )}
    </>
  );
}
const LinkItems = [
  { name: 'Home', icon: FiHome, href: '/' },
  { name: 'Sobre nós', icon: FiBook, href: '/sobre' },
  { name: 'Produtos', icon: FiShoppingCart, href: '/produto' },
  { name: 'Fale conosco', icon: FiPhone, href: '/contato' },
];

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: ReactText;
  href: string;
}

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
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon} href={link.href}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};
