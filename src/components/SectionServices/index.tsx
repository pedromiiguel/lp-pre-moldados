import { Box, Flex, Heading, Icon, Image } from '@chakra-ui/react';
import React from 'react';

import { GiBrickWall, GiClayBrick } from 'react-icons/gi';

const SectionServices = () => {
  const servicesItems = [
    { name: 'Fabricação de canaletas', icon: GiClayBrick },
    { name: 'Muros Pré Moldados', icon: GiBrickWall },
    { name: 'Blocos de concreto', icon: GiClayBrick },
  ];

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      mx="auto"
      py={10}
      px={[4, 8, 8, 8]}
      

      sx={{
        background:
          'linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url(https://images.unsplash.com/photo-1579492450119-80542d516179?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)',
      }}
    >
      <Box maxWidth={1440} width="100%" mx="auto">
        <Heading textAlign="center" mb={10}>
          Serviços
        </Heading>
        <Flex
          align="center"
          justifyContent="center"
          gap={8}
          flexDirection={["column","column", "row"]}
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
            >
              <Icon
                mr="4"
                fontSize="36"
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
