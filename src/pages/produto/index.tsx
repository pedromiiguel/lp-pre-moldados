import {
  Box,
  chakra,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
} from '@chakra-ui/react';
import { NextPage } from 'next';
import Head from 'next/head';
import { Navbar } from '../../components/Navbar';
import { products } from '../../components/Carousel/produts';
import { Footer } from '../../components/Footer';
import Image from 'next/image';
const Produto: NextPage = () => {
  const OurImage = chakra(Image, {
    shouldForwardProp: (prop) =>
      ['width', 'height', 'src', 'alt', 'layout'].includes(prop),
  });

  return (
    <>
      <Head>
        <title>Produtos - MP Pré Moldados</title>
        <meta
          name="description"
          content="Confira todos os produtos da MP Pré Moldados"
        />
      </Head>
      <Navbar backgroundColor="transparent" isBorderBottom />

      <Box maxWidth={1440} margin="0 auto" px={[4, 8, 8, 8]}>
        <Heading my={16}>Produtos</Heading>
        <Grid
          templateColumns={[
            'repeat(1, 1fr)',
            'repeat(2, 1fr)',
            'repeat(2, 1fr)',
            'repeat(3, 1fr)',
          ]}
          gap={8}
          mb={16}
        >
          {products.map((product) => (
            <GridItem
              w="100%"
              key={product.description}
              sx={{
                boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.2)',
              }}
              transition="transform .3s"
              _hover={{
                transform: 'scale(1.05)',
              }}
            >
              <div>
                <Box
                  width="100%"
                  height={['300px', '400px']}
                  position="relative"
                >
                  <OurImage src={product.image} alt="sobre" layout="fill" />
                </Box>

                <Box p={4}>
                  <Heading color="gray.900" size="md" py={5}>
                    {product.name}
                  </Heading>
                  {!!product.description && (
                    <Flex>
                      <Text color="gray.900" fontWeight="bold" mr={2}>
                        Dimensões:
                      </Text>
                      <Text color="gray.300">{product.description}</Text>
                    </Flex>
                  )}
                  {!!product.price && (
                    <Flex>
                      <Text color="gray.900" fontWeight="bold" mr={2}>
                        Preço:
                      </Text>
                      <Text color="gray.300">{product.price}</Text>
                    </Flex>
                  )}
                </Box>
              </div>
            </GridItem>
          ))}
        </Grid>
      </Box>
      <Footer />
    </>
  );
};

export default Produto;
