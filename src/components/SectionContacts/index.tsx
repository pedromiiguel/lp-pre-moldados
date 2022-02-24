import { Box, Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { BsTelephone } from 'react-icons/bs';
import { FaWhatsapp } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

export const SectionContacts: React.FC = () => {
  return (
    <Box
      bg="#f4f4f4"
      borderBottomWidth={1}
      borderStyle={'solid'}
      borderColor={useColorModeValue('gray.200', 'gray.700')}
      id="fale conosco"
    >
      <Box maxWidth={1440} width="100%" mx="auto">
        <Flex
          alignItems={'center'}
          justifyContent="space-between"
          flexDirection={['column', 'column', 'column', 'row']}
          py={20}
          gap={20}
         
        >
          <Flex flexDirection="column" alignItems="center" gap={4}>
            <Flex alignItems="center" justifyContent="center">
              <BsTelephone size={20} />
              <Heading ml={2} size="md">
                Telefone
              </Heading>
            </Flex>
            <Text>(61) 4102-7744</Text>
          </Flex>
          <Flex flexDirection="column" alignItems="center" gap={4}>
            <Flex alignItems="center" justifyContent="center">
              <FaWhatsapp size={20} />
              <Heading ml={2} size="md">
                Whatsapp
              </Heading>
            </Flex>
            <Text>(61) 99380-6396</Text>
          </Flex>
          <Flex flexDirection="column" alignItems="center" gap={4}>
            <Flex alignItems="center" justifyContent="center">
              <HiOutlineMail size={20} />
              <Heading ml={2} size="md">
                E-mail
              </Heading>
            </Flex>
            <Text>mppremoldados@gmail.com</Text>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};
