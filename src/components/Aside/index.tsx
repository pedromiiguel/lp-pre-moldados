import React from 'react';
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  Link,
  Text,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FiFilter } from 'react-icons/fi';
import { products } from '../Carousel/produts';
const categories = [
  { name: 'Blocos', href: 'bloco' },
  { name: 'Canaletas', href: 'canaleta' },
  { name: 'Manilhas, Tubos e Calhas', href: 'manilha' },
  { name: 'Decoração', href: 'decoracao' },
  { name: 'Calçamento e meio fio', href: 'calcamento' },
  { name: 'Muros e Casas pré Moldadas', href: 'muro' },
  { name: 'Suportes para energia solar', href: 'suporte' },
];

interface AsideProps {
  quantity: number;
}

export const Aside = ({ quantity }: AsideProps) => {
  const { query, push, replace } = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const showAside = useBreakpointValue({
    sm: false,
    md: false,
    lg: true,
  });

  return (
    <>
      {showAside ? (
        <Flex as="aside" flexDirection="column" width="100%" maxWidth="330px">
          <Heading
            size="md"
            color="blue.900"
            textTransform="uppercase"
            position="relative"
            pb={4}
            marginBottom="32px"
            _after={{
              content: '""',
              position: 'absolute',
              bottom: '2',
              left: '0',
              width: '30px',
              height: '3px',
              background: 'blue.900',
            }}
          >
            CATEGORIAS DE PRODUTO
          </Heading>
          <Flex flexDirection="column" ml={4}>
            {categories.map((category, index) => {
              const isActive = query.category === category.href;

              return (
                <Link
                  key={index}
                  fontSize="md"
                  position="relative"
                  _after={{
                    content: '""',
                    position: 'absolute',
                    top: '0',
                    bottom: '0',
                    left: '-8px',
                    width: '1px',
                    height: '100%',
                    background: 'blue.900',
                  }}
                  py={1}
                  _hover={{
                    textDecoration: 'none',
                    opacity: '0.7',
                  }}
                  textTransform="uppercase"
                  onClick={() => {
                    if (query.category === category.href) {
                      return replace('/');
                    }

                    push({ pathname: '/', query: { category: category.href } });
                  }}
                  fontWeight={isActive ? 'bold' : 'medium'}
                  color={isActive ? 'blue.900' : 'gray.600'}
                >
                  {category.name}
                </Link>
              );
            })}
          </Flex>
        </Flex>
      ) : (
        <Flex alignItems="center" justifyContent="space-between" gap={4} mb={4}>
          <Text color="gray.500">
            Exibindo {quantity} de {products.length} resultados
          </Text>
          <Button
            leftIcon={<FiFilter size={20} />}
            fontSize="md"
            fontWeight="semibold"
            background="transparent"
            _hover={{
              background: 'gray.50',
            }}
            onClick={onOpen}
          >
            Filtrar
          </Button>
        </Flex>
      )}

      {isOpen && (
        <Box minH="100vh" bg={'gray.100'}>
          <Drawer
            isOpen={isOpen}
            autoFocus={false}
            placement="left"
            onClose={onClose}
            returnFocusOnClose={false}
            onOverlayClick={onClose}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>
                <Heading
                  size="md"
                  color="blue.900"
                  textTransform="uppercase"
                  position="relative"
                  mt={6}
                  _after={{
                    content: '""',
                    position: 'absolute',
                    bottom: '-1',
                    left: '0',
                    width: '30px',
                    height: '3px',
                    background: 'blue.900',
                  }}
                >
                  CATEGORIAS DE PRODUTO
                </Heading>
              </DrawerHeader>
              <DrawerBody>
                <Flex flexDirection="column" ml={4}>
                  {categories.map((category, index) => {
                    const isActive = query.category === category.href;

                    return (
                      <Link
                        key={index}
                        fontSize="md"
                        position="relative"
                        _after={{
                          content: '""',
                          position: 'absolute',
                          top: '0',
                          bottom: '0',
                          left: '-8px',
                          width: '1px',
                          height: '100%',
                          background: 'blue.900',
                        }}
                        py={1}
                        _hover={{
                          textDecoration: 'none',
                          opacity: '0.7',
                        }}
                        textTransform="uppercase"
                        onClick={() => {
                          onClose();
                          if (query.category === category.href) {
                            return replace('/');
                          }

                          push({
                            pathname: '/',
                            query: { category: category.href },
                          });
                        }}
                        fontWeight={isActive ? 'bold' : 'medium'}
                        color={isActive ? 'blue.900' : 'gray.600'}
                      >
                        {category.name}
                      </Link>
                    );
                  })}
                </Flex>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Box>
      )}
    </>
  );
};

export default Aside;
