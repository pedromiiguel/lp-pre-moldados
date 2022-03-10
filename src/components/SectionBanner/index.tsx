import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { Navbar } from '../Navbar';

export const SectionBanner = () => {
  return (
    <Box
      as="main"
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
      <Navbar backgroundColor="transparent" />
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
              N° 1 EM BLOCOS E CANALETAS
            </Heading>
            <Heading fontSize={['3xl', '5xl']} lineHeight={['3xl', '5xl']}>
              DE CONCRETO EM BRASÍLIA
            </Heading>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};
