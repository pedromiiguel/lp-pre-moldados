import { Box, Flex, Heading, Icon } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import Container from '../../Container';
import { Navbar } from '../../Navbar';
import content from './content';

export const SectionBanner = () => {
  return (
    <Box
      as="section"
      width="100%"
      height={['100%', '100%', '100vh', '100vh']}
      sx={{
        background:
          'linear-gradient(#fffbfb92, #dad5d547), url(banner.jpg) no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
      }}
    >
      <Navbar />
      <Container height="100%">
        <Flex
          height="100%"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Heading fontSize={['2xl', '3xl']} mt={8}>
            O que você procura ?
          </Heading>
          <Flex
            my={8}
            align="center"
            justifyContent="center"
            gap={8}
            flexDirection={['column', 'column', 'row']}
          >
            {content.cards.map((service) => (
              <Link href={service.href} passHref key={service.name}>
                <Flex
                  borderRadius="16px"
                  align="center"
                  justifyContent="center"
                  flexDirection="column"
                  bg="blue.900"
                  color="gray.50"
                  width="100%"
                  height="200px"
                  p={8}
                  sx={{
                    boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.555)',
                  }}
                  transition="transform .3s"
                  cursor="pointer"
                  as="a"
                  _hover={{
                    filter: 'brightness(0.9)',
                  }}
                >
                  <Icon
                    mr="4"
                    fontSize="48"
                    _groupHover={{
                      color: 'white',
                    }}
                    as={service.icon}
                  />

                  <Heading textAlign="center" size="md" my={8}>
                    {service.name}
                  </Heading>
                </Flex>
              </Link>
            ))}
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};
