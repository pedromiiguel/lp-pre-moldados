import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Stack,
  Text,
  chakra,
} from '@chakra-ui/react';
import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Footer } from '../../components/Footer';
import { Navbar } from '../../components/Navbar';
import { WhatsappButton } from '../../components/WhatsappButton';

const Sobre: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sobre nós - MP Pré Moldados</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Navbar backgroundColor="transparent" isBorderBottom />

      <Flex
        flexDirection="column"
        justifyContent="space-between"
        bg="white"
        px={[4, 8, 8, 8]}
      >
        <Grid
          templateColumns={[
            'repeat(1, 1fr)',
            'repeat(1, 1fr)',
            'repeat(1, 1fr)',
            'repeat(2, 1fr)',
          ]}
          gap={8}
          alignItems="center"
          maxWidth={1440}
          margin="0 auto"
          my={[8, 8, 32]}
        >
          <GridItem
            width="100%"
            height={[246, 446]}
            sx={{
              boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.3)',
            }}
            position="relative"
          >
            <Image src="/banner3.png" alt="bloco" layout="fill" />
          </GridItem>

          <GridItem>
            <Heading mb={6}>Sobre nós</Heading>
            <Stack spacing={4} fontSize="md" color="gray.500">
              <Text>
                Atualmente somos uma indústria especializada no comércio e
                fabricação de Blocos e Canaletas de Concreto.
              </Text>
              <Text>
                Contamos com uma ampla diversidades de materiais que visa suprir
                a necessidade da Alvenaria de Vedação e Estrutural na Construção
                civil.
              </Text>
              <Text>
                A MP PRÉ-MOLDADOS foi criada e fundada em 2012 com intuito de
                suprir a demanda de materiais Pré-moldados para diversas regiões
                de Brasília. Para isso, contamos com um amplo Estoque e Entrega
                de Mercadorias à curto prazo afim de atender da melhor forma
                tanto o mercado varejo como também o atacado.
              </Text>

              <Text>
                Todo material que fornecemos atendem às normas exigidas além de
                passar por análises técnicas em laboratórios credenciados
                periodicamente.
              </Text>
            </Stack>
          </GridItem>
        </Grid>
      </Flex>
      <Footer />
      <WhatsappButton phoneNumber="61 993806396" text="" />
    </>
  );
};

export default Sobre;
