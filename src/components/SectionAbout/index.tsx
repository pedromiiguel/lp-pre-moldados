import { Flex, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';

export const SectionAbout = () => {
  return (
    <Flex
      id="sobre"
      alignItems="center"
      justifyContent="space-between"
      maxWidth={1440}
      flexDirection={[
        'column-reverse',
        'column-reverse',
        'column-reverse',
        'row',
      ]}
      gap={8}
      mx="auto"
      py={8}
      px={[4, 8, 8, 8]}
    >
      <Stack spacing={8} maxWidth={600}>
        <Heading fontSize={['2xl', '2xl', '4xl']} color="#242424">
          Fabricamos blocos, canaletas, muros, casas em pré-moldado e muito
          mais!
        </Heading>
        <Text fontSize="lg" color="gray.500">
          Todo material que fornecemos atendem às normas exigidas além de passar
          por análises técnicas em laboratórios credenciados periodicamente.
          {/* A MP PRÉ-MOLDADOS foi criada e fundada em 2012 com intuito de suprir a
          demanda de materiais Pré-moldados para diversas regiões de Brasília.
          Para isso, contamos com um amplo Estoque e Entrega de Mercadorias à
          curto prazo afim de atender da melhor forma tanto o mercado varejo
          como também o atacado. */}
        </Text>
      </Stack>
      <Image
        width={['100%', '100%', '100%', '50%']}
        height={['300px', '300px', '400px', '600px']}
        src="/blocks.jpg"
        alt="sobre"
      />
    </Flex>
  );
};
