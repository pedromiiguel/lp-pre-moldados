import {
  Box,
  chakra,
  Flex,
  Heading,
  Stack,
  Text,
  Image,
} from '@chakra-ui/react';

import React from 'react';
import content from './content';
export const SectionAbout = () => {
  return (
    <Flex
      id="sobre"
      alignItems="center"
      justifyContent="space-between"
      flexDirection={[
        'column-reverse',
        'column-reverse',
        'column-reverse',
        'row',
      ]}
      gap={8}
      maxWidth={1440}
      mx="auto"
      py={[8, 8, 8, 32]}
    >
      <Stack spacing={8} width={['100%', '100%', '100%', '55%']}>
        <Heading fontSize={['2xl', '2xl', '4xl']} color="#242424">
          {content.title}
        </Heading>
        <Text fontSize="lg" color="gray.500">
          {content.firstParagraph}
        </Text>
        <Text fontSize="lg" color="gray.500">
          {content.secondParagraph}
        </Text>
      </Stack>

      <Image
        borderRadius="8px"
        src="/banner_section_about.jpg"
        alt="Blocos de concreto empilhados"
        width={['100%', '100%', '100%', '45%']}
        height={['300px', '550px']}
        sx={{
          boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.3)',
        }}
        objectFit="cover"
      />
    </Flex>
  );
};
