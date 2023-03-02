import { Box, Button, Flex, Grid, Stack, Text } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';
import Aside from '../../Aside';
import Container from '../../Container';
import { Navbar } from '../../Navbar';
import { Navigation, Pagination } from 'swiper';

import { products } from '../../Carousel/produts';
import Image from 'next/image';
import { useRouter } from 'next/router';

type Categories = {
  [key in string]: string;
};

const categories: Categories = {
  bloco: 'Blocos',
  canaleta: 'Canaletas',
  muro: 'Muros e Casas Pré-moldadas',
  manilha: 'Manilhas, Tubos e Calhas',
  calcamento: 'Calçamento e Meio fio',
  decoracao: 'Decoração',
  suporte: 'Suportes para energia solar',
};

export const SectionBanner = () => {
  const { query } = useRouter();

  const filterProducts = products.filter(
    (product) => product.category === query.category
  );

  const data = !!filterProducts.length ? filterProducts : products.slice(1, 9);

  return (
    <>
      <Navbar backgroundColor="transparent" isBorderBottom />
      <Container height="100%" width="100%" mt={4}>
        <Flex flexDirection={['column', 'column', 'column', 'row']}>
          <Aside quantity={data.length} />
          <Box flexDirection="column">
            <Box
              maxWidth={1000}
              maxHeight={300}
              width="100%"
              height="100%"
              overflow="hidden"
            >
              <Swiper
                slidesPerView={1}
                slidesPerGroup={1}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                loop={false}
                loopFillGroupWithBlank={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <Image
                    src="/home/muro.jpg"
                    alt="Muro de concreto"
                    width={1000}
                    height={300}
                    objectFit="cover"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src="/home/blocos.jpg"
                    alt="Muro de concreto"
                    width={1000}
                    height={300}
                    objectFit="cover"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src="/home/teste.jpg"
                    alt="Muro de concreto"
                    width={1000}
                    height={300}
                    objectFit="cover"
                  />
                </SwiperSlide>
              </Swiper>
            </Box>
            <Grid
              gridTemplateColumns={[
                '1fr',
                'repeat(2,1fr)',
                'repeat(3,1fr)',
                'repeat(4,1fr)',
              ]}
              columnGap="4"
              rowGap={6}
              flex="1"
              padding={4}
              justifyItems="center"
            >
              {data.map((product, index) => (
                <Stack
                  direction="column"
                  align="flex-start"
                  justify="space-between"
                  spacing={2}
                  key={index}
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    width="225"
                    height="225"
                    objectFit="contain"
                  />
                  <Box>
                    <Text fontSize="xs" textTransform="uppercase" opacity={0.7}>
                      {categories[product.category]}
                    </Text>
                    <Text fontSize="sm" color="gray.600">
                      {product.name}
                    </Text>
                  </Box>

                  <Button
                    as="a"
                    aria-label="Open Whatsapp"
                    target="_blank"
                    href={`https://api.whatsapp.com/send?phone=5561994642112`}
                    textTransform="uppercase"
                    rounded="md"
                    background="green.600"
                    color="white"
                    _hover={{
                      background: 'green.700',
                    }}
                    _active={{
                      background: 'green.700',
                    }}
                  >
                    Solicitar orçamento
                  </Button>
                </Stack>
              ))}
            </Grid>
          </Box>
        </Flex>
      </Container>
    </>
  );
};
