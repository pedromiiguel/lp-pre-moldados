import {
  Box,
  chakra,
  Flex,
  Heading,
  Stack,
  Text,
  Image,
  Grid,
  GridItem,
} from '@chakra-ui/react';

import React from 'react';
import Container from '../../Container';
import content from './content';
export const SectionAbout = () => {
  return (
    <Container as="section" id="sobre">
      <Grid
        gap={8}
        py={8}
        gridTemplateColumns={['1fr ', '1fr', ' 1fr', '1fr 1fr']}
        alignItems="center"
      >
        <GridItem>
          <Stack spacing={8}>
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
        </GridItem>

        <GridItem gridRow={1} gridColumn={[1, 1, 1, 2]}>
          <Image
            borderRadius="8px"
            src="/banner_section_about.jpg"
            alt="Blocos de concreto empilhados"
            // width={['100%', '100%', '100%', '100']}
            sx={{
              boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.3)',
            }}
            objectFit="cover"
          />
        </GridItem>
      </Grid>
    </Container>
  );
};
