import { Heading } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from '../../Carousel';
import Container from '../../Container';

const SectionProducts = () => {
  return (
    <Container py={32} as="section">
      <Heading textAlign="center" mb={10}>
        Produtos
      </Heading>
      <Carousel />
    </Container>
  );
};

export default SectionProducts;
