import { Flex, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';

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
      mx="auto"
      py={[8, 8, 8, 32]}
      
    >
      <Stack spacing={8}  px={[8, 8, 8, 32]}>
        <Heading fontSize={['2xl', '2xl', '4xl']} color="#242424">
          Fabricamos blocos, canaletas, muros, casas em pré-moldado e muito
          mais!
        </Heading>
        <Text fontSize="lg" color="gray.500">
          Todo material que fornecemos atendem às normas exigidas além de passar
          por análises técnicas em laboratórios credenciados periodicamente.
        </Text>
        <Text fontSize="lg" color="gray.500">
          A MP PRÉ-MOLDADOS foi criada e fundada em 2012 com intuito de suprir a
          demanda de materiais Pré-moldados para diversas regiões de Brasília.
          Para isso, contamos com um amplo Estoque e Entrega de Mercadorias à
          curto prazo afim de atender da melhor forma tanto o mercado varejo
          como também o atacado.
        </Text>
      </Stack>

      <Image
        borderBottomLeftRadius={["0","0","0","8px"]}
        borderTopLeftRadius={["0","0","0","8px"]}
       
        width={['100%', '100%', '100%', '40%']}
        height={['360px', '360px', '550px', '550px']}
        src="/blocks.jpg"
        alt="sobre"
        sx={{
          boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.555)'
        }}
      />
    </Flex>
  );
};
