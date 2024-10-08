import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { BsTelephone } from 'react-icons/bs';
import { FaWhatsapp } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import Container from '../../Container';

const content = {
  contacts: [
    {
      value: '(61) 99464-2112 (Itapuã  -DF)',
      href: 'https://api.whatsapp.com/send?phone=5561994642112',
      icon: <FaWhatsapp size={20} />,
      label: 'Whatsapp',
    },
    {
      value: '(61) 99464-2112 (Itapuã  -DF)',
      href: 'tel:61994642112',
      icon: <BsTelephone size={20} />,
      label: 'Telefone',
    },

    {
      value: 'mppremoldados@gmail.com',
      href: 'mailto:mppremoldados@gmail.com',
      icon: <HiOutlineMail size={20} />,
      label: 'E-mail',
    },
  ],
};

export const SectionContacts: React.FC = () => {
  return (
    <Box
      bg="#f4f4f4"
      borderBottomWidth={1}
      borderStyle={'solid'}
      borderColor="gray.200"
    >
      <Container>
        <Box maxWidth={1440} width="100%" mx="auto">
          <Flex
            alignItems={'center'}
            justifyContent="space-between"
            flexDirection={['column', 'column', 'column', 'row']}
            py={20}
            gap={20}
          >
            {content.contacts.map((item, index) => (
              <Flex
                flexDirection="column"
                alignItems="center"
                gap={4}
                key={item.value}
              >
                <Flex alignItems="center" justifyContent="center">
                  {item.icon}
                  <Heading ml={2} size="md">
                    {item.label}
                  </Heading>
                </Flex>
                <Text
                target="_blank"
                  as="a"
                  href={item.href}
                  _hover={{ textDecoration: 'underline' }}
                >
                  {item.value}
                </Text>
                {index !== 2 && (
                   <Text
                   target="_blank"
                     as="a"
                     href={index === 0? 'https://api.whatsapp.com/send?phone=5562996730993' : 'tel:62996730993'}
                     _hover={{ textDecoration: 'underline' }}
                   >
                     (62) 99673-0993 (Posse - GO )
                   </Text>
                )}
              </Flex>
            ))}
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};
