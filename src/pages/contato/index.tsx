import {
  Box,
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  Image,
} from '@chakra-ui/react';
import { NextPage } from 'next';
import Head from 'next/head';
import { BsTelephone } from 'react-icons/bs';
import { FiFacebook, FiInstagram } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';
import { IoLocationOutline } from 'react-icons/io5';
import { Footer } from '../../components/Footer';
import { Navbar } from '../../components/Navbar';
import { WhatsappButton } from '../../components/WhatsappButton';

const Contato: NextPage = () => {
  return (
    <>
      <Head>
        <title>Fale conosco - MP Pré-Moldados e Construtora</title>
        <meta
          name="description"
          content="Entre em contato com a MP Pré Moldados, queremos tirar suas
              dúvidas e fazer seu orçamento."
        />
        <link rel="canonical" href="https://mppremoldados.com/contato" />
      </Head>
      <Navbar backgroundColor="transparent" isBorderBottom />
      <Box>
        <Flex
          minHeight="80vh"
          maxWidth={1440}
          margin="40px auto"
          align={['flex-start', 'flex-start', 'flex-start', 'center']}
          gap={16}
          justifyContent={['center', 'center', 'center', 'space-between']}
          flexDirection={['column', 'column', 'column', 'row']}
        >
          <Stack spacing={8} width="100%" maxWidth={400} px={[4, 8, 8, 8]}>
            <Heading textAlign={['left']}>
              Entre em contato com a gente!
            </Heading>
            <Text fontSize="md" color="gray.500" textAlign={['left']}>
              Entre em contato com a MP Pré Moldados, queremos tirar suas
              dúvidas e fazer seu orçamento.
            </Text>
            <Flex alignItems="center" justifyContent={['flex-start']}>
              <Button
                height="50px"
                width="200px"
                color="white"
                as="a"
                target="_blank"
                href="https://api.whatsapp.com/send?phone=5561994642112"
                bg="blue.900"
                aria-label="Open Whatsapp"
                _hover={{ backgroundColor: '#0f242e' }}
                leftIcon={
                  <Image
                    src="/whatsapp-icon.svg"
                    alt="ícone do whatsapp"
                    width="20px"
                    height="20px"
                  />
                }
              >
                Entre em contato
              </Button>
            </Flex>
          </Stack>

          <Stack
            spacing={8}
            px={[4, 8, 8, 8]}
            wordBreak="break-word"
            fontSize="md"
          >
            <Flex alignItems="center" justifyContent="flex-start" gap={4}>
              <BsTelephone size={26} color="#193B4B" />
              <Text
                as="a"
                href="tel:061994642112"
                _hover={{ textDecoration: 'underline' }}
              >
                (61) 99464-2112
              </Text>
            </Flex>
            <Flex>
              <Box ml={-1}>
                <IoLocationOutline size={32} color="#193B4B" />
              </Box>

              <Text
                ml={2}
                as="a"
                target="_blank"
                cursor="pointer"
                href="https://maps.app.goo.gl/SyAKZb52s2hJAqaGA"
                _hover={{ textDecoration: 'underline' }}
              >
                Condomínio Fazendinha Conj. A - Itapuã, Brasília - DF, 71596-223
              </Text>
            </Flex>

            <Flex alignItems="center" justifyContent="flex-start" gap={4}>
              <HiOutlineMail size={26} color="#193B4B" />

              <Text
                as="a"
                href="mailto:mppremoldados@gmail.com"
                _hover={{ textDecoration: 'underline' }}
              >
                mppremoldados@gmail.com
              </Text>
            </Flex>

            <Flex alignItems="center" justifyContent="flex-start" gap={4}>
              <FiInstagram size={26} color="#193B4B" />

              <Text
                as="a"
                target="_blank"
                cursor="pointer"
                _hover={{ textDecoration: 'underline' }}
                href="https://www.instagram.com/mp.premoldados/"
              >
                https://www.instagram.com/mp.premoldados
              </Text>
            </Flex>
          </Stack>
        </Flex>
      </Box>

      <Footer />
      <WhatsappButton phoneNumber="61994642112" text="" />
    </>
  );
};

export default Contato;
