import { Box, Flex, Heading, Icon, Image, Text } from '@chakra-ui/react';
import React from 'react';

import { GiBrickWall, GiClayBrick } from 'react-icons/gi';

const SectionServices = () => {
  const servicesItems = [
    { name: 'Blocos de concreto', icon: GiClayBrick },
    { name: 'Fabricação de canaletas', icon: GiClayBrick },
    { name: 'Muros Pré Moldados', icon: GiBrickWall },
  ];

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      mx="auto"
      py={32}
      px={[4, 8, 8, 8]}
      sx={{
        background:
          'linear-gradient(#ffffffa7, #ffffff97), url(https://images.unsplash.com/photo-1579492450119-80542d516179?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)',

        boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.199)',
      }}
    >
      <Box maxWidth={1440} width="100%" mx="auto">
        <Flex
          alignItems=" center"
          justifyContent="center"
          flexDirection="column"
          gap="8"
          mb={12}
        >
          <Heading textAlign="center">Serviços</Heading>
          <Text
            fontSize="lg"
            color="gray.900"
            textAlign="center"
            width="100%"
            maxWidth="500px"
          >
            Com mais de 10 anos no mercado, a Mp Pré moldados já conquistou
            clientes com seus tratamentos exclusivos e totalmente naturais.
          </Text>
        </Flex>

        <Flex
          align="center"
          justifyContent="center"
          gap={8}
          flexDirection={['column', 'column', 'row']}
        >
          {servicesItems.map((service) => (
            <Flex
              key={service.name}
              borderRadius="16px"
              align="center"
              justifyContent="center"
              flexDirection="column"
              bg="#193B4B"
              color="gray.50"
              maxWidth="300px"
              width="100%"
              height="200px"
              p={8}
              sx={{
                boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.555)',
              }}
              transition="transform .3s"
              _hover={{
                transform: 'scale(1.05)',
              }}
              cursor="pointer"
            >
              <Icon
                mr="4"
                fontSize="48"
                _groupHover={{
                  color: 'white',
                }}
                as={service.icon}
              />
              {service.icon}
              <Heading textAlign="center" size="md" my={8}>
                {service.name}
              </Heading>
            </Flex>
          ))}
        </Flex>
      </Box>
    </Flex>
  );
};

export default SectionServices;
