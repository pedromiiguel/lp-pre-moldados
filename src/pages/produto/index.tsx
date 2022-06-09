import {
  Box,
  chakra,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  Image,
} from '@chakra-ui/react';
import { NextPage } from 'next';
import Head from 'next/head';
import { products } from '../../components/Carousel/produts';
import { Footer } from '../../components/Footer';
import { Navbar } from '../../components/Navbar';
import { WhatsappButton } from '../../components/WhatsappButton';
const Produto: NextPage = () => {
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
                <Image
                  src={product.image}
                  alt={product.name}
                  width="100%"
                  height={['300px', '400px']}
                  objectFit="contain"
                />

                <Box p={4}>
                  <Heading color="gray.900" size="md" py={5}>
                    {product.name}
                  </Heading>
                  {!!product.description && (
                    <Flex>
                      <Text color="gray.900" fontWeight="bold" mr={2}>
                        Dimensões:
                      </Text>
                      <Text color="gray.900">{product.description}</Text>
                    </Flex>
                  )}
                  {!!product.price && !Array.isArray(product.price) && (
                    <Flex>
                      <Text color="gray.900" fontWeight="bold" mr={2}>
                        Preço:
                      </Text>
                      <Text color="gray.900">{product.price}</Text>
                    </Flex>
                  )}
                  {!!product.price && Array.isArray(product.price) && (
                    <Text color="gray.900" fontWeight="bold" mr={2}>
                      Preços:
                    </Text>
                  )}

                  {!!product.price &&
                    Array.isArray(product.price) &&
                    product.price.map((price: string) => (
                      <Text color="gray.900" key={price}>
                        {price}
                      </Text>
                    ))}

                  {!!product.thousand && (
                    <Flex>
                      <Text color="gray.900" fontWeight="bold" mr={2}>
                        Milheiro:
                      </Text>
                      <Text color="gray.900">{product.thousand}</Text>
                    </Flex>
                  )}
                </Box>
              </div>
            </GridItem>
          ))}
        </Grid>
      </Box>
      <Footer />
      <WhatsappButton phoneNumber="61994642112" text="" />
    </>
  );
};

export default Produto;
