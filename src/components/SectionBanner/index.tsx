import { Box, Flex } from '@chakra-ui/react';
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
          'linear-gradient(#1a18182c, #201d1d3d), url(background_teste.jpg) no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center'
      }}
    >
      <Navbar />
      <Box height="100vh" width="100%" bg="transparent">
        <Flex
          alignItems="center"
          justifyContent="center"
          height="100%"
          width="100%"
          mx="auto"
        >
          {/* <Flex alignItems={'center'} justifyContent="center" height="100%">
          <Stack
            spacing={6}
            alignItems="center"
            width={["90%","90%","90%","50%"]}
            p={8}
            bg="#242424"
          >
            <Heading color="black" textAlign="center">
              <Text as="span" color="white" fontSize="32px">
                Fabricamos blocos, canaletas, muros, casas em pré-moldado e
                muito mais!
              </Text>
            </Heading>
            <Text fontSize="lg" color="gray.50" textAlign="center">
              Todo material que fornecemos atendem às normas exigidas além
              de passar por análises técnicas em laboratórios credenciados
              periodicamente.
            </Text>
            <Button size="lg" width="60%" bg="#C9C3B3">
              Conheça mais
            </Button>
          </Stack>
        </Flex> */}
        </Flex>
      </Box>
    </Box>
  );
};
