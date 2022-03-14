import {
  Box,
  chakra,
  Flex,
  SimpleGrid,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
  VisuallyHidden
} from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { IoLocationOutline } from 'react-icons/io5';
import Container from '../Container';

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

const Links = [
  { name: 'Home', href: '/' },
  { name: 'Sobre nós', href: '/sobre' },
  { name: 'Produtos', href: '/produto' },
  { name: 'Fale conosco', href: '/contato' },
];

export function Footer() {
  const isMobile = useBreakpointValue({ base: false, sm: true });

  return (
    <Box
      bg="#f4f4f4"
      color={useColorModeValue('gray.700', 'gray.200')}
      as="footer"
    >
      <Container as={Stack} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <Image
                src="/logo.png"
                width="200px"
                height="200px"
                alt="MP pré moldados"
              />
            </Box>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Links</ListHeader>
            {Links.map((link) => (
              <Link href={link.href} key={link.name}>
                {link.name}
              </Link>
            ))}
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Horário de atendimento</ListHeader>
            <Text>Segunda a sexta: 07:00 às 17:00</Text>
            <Text>Sábado: 07:00 às 12:00</Text>
            <Text>Domingo: Fechado</Text>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Redes Sociais</ListHeader>
            <Stack direction={'row'} spacing={6}>
              <SocialButton
                label={'Facebook'}
                href={'https://www.facebook.com/mppremoldados/'}
              >
                <FaFacebook />
              </SocialButton>
              <SocialButton
                label={'Instagram'}
                href={
                  'https://www.instagram.com/mp.premoldados/?utm_medium=copy_link'
                }
              >
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box height="1px" background="#E4E4E4" opacity="0.9" />
      <Box>
        <Container py={8}>
          <Flex
            align="center"
            justifyContent="space-between"
            width="100%"
            flexDirection={['column', 'row']}
            gap={[4, 8]}
          >
            <Text>Todos os Direitos Reservados 2022 © MP Pré Moldados</Text>
            <Flex>
              {isMobile && (
                <Box mr={2}>
                  <IoLocationOutline size={24} />
                </Box>
              )}

              <Text
                as="a"
                target="_blank"
                cursor="pointer"
                href="https://maps.app.goo.gl/SyAKZb52s2hJAqaGA"
                _hover={{
                  textDecoration: 'underline',
                }}
              >
                Condomínio Fazendinha Conj. A - Itapuã, Brasília - DF, 70297-400
              </Text>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
}
