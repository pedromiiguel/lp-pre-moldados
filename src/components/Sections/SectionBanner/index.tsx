import { Box, Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import { Navbar } from '../../Navbar';

const content = {
  firstTitle: 'N° 1 EM BLOCOS E CANALETAS',
  secondTitle: 'DE CONCRETO EM BRASÍLIA',
};

export const SectionBanner = () => {
  return (
    <Box
      as="header"
      width="100%"
      height="100vh"
      sx={{
        background:
          'linear-gradient(#fffbfb92, #dad5d547), url(banner.jpg) no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
      }}
    >
      <Navbar />
      <Box width="100%" height="100%" bg="transparent">
        <Flex
          alignItems="center"
          justifyContent="center"
          height="100%"
          width="100%"
          mx="auto"
        >
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            color="black"
            px={[4, 8, 8, 8]}
          >
            <Heading fontSize={['3xl', '5xl']} lineHeight={['3xl', '5xl']}>
              {content.firstTitle}
            </Heading>
            <Heading fontSize={['3xl', '5xl']} lineHeight={['3xl', '5xl']}>
              {content.secondTitle}
            </Heading>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};
