import {
  Flex,
  Grid,
  Heading,
  Image,
  Text,
  useMediaQuery,
} from '@chakra-ui/react';
import React from 'react';
import { Carousel } from '../../Carousel';
import Container from '../../Container';
import { products } from '../../Carousel/produts';

const SectionProducts = () => {
  const [isSmallThan768] = useMediaQuery('(max-width: 768px)');

  return (
    <Container
      py={16}
      as="section"
    >
      <Heading textAlign="center" mb={10}>
        Produtos
      </Heading>
      {isSmallThan768 ? (
        <Grid templateColumns="1fr 1fr" gap={4}>
          {products.map((product) => (
            <Flex
              key={`${product.name} ${product.description}`}
              width="100%"
              flexDirection="column"
              textAlign="center"
            >
              <Image
                src={product.image}
                alt={product.name}
                width="100%"
                height="200px"
                objectFit="contain"
              />

              <Heading color="gray.900" size="md" py={5}>
                {product.name}
              </Heading>

              <Text color="gray.900" fontWeight="bold" mr={2} as="span">
                Medida:
              </Text>
              <Text color="gray.900">{product.description}</Text>
            </Flex>
          ))}
        </Grid>
      ) : (
        <Carousel />
      )}
    </Container>
  );
};

export default SectionProducts;
