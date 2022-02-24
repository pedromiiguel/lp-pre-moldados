import { Box, Heading } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from '../Carousel';

const SectionProducts: React.FC = () => {
  return (
    <Box
      py={32}
      maxWidth={1440}
      width="100%"
      mx="auto"
      height="auto"
      id="produtos"
    >
      <Heading textAlign="center" my={10}>
        Produtos
      </Heading>
      <Carousel />
    </Box>
  );
};

export default SectionProducts;
