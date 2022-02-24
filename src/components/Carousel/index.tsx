import '../../../tsconfig.json';

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper';
import { Box, Heading, Image, Stack, Text, useBreakpointValue } from '@chakra-ui/react';

import { products } from './produts';

export function Carousel() {

 
  const slidesPerView = useBreakpointValue({
    base: 1,
    sm: 1,
    md: 2,
    lg: 3
  })
  console.log(slidesPerView)

  return (
    <>
      <Box
      px={[4,8,8,8]}
        sx={{
          '.swiper-slide': {
            height: '600px',
            width: '100%',
            img: {
              display: 'block',
              objectFit: 'cover',
            },
          },
          '.swiper-button-next': {
            color: 'gray.100'
          },
          '.swiper-button-prev':{
            color: 'gray.100'

          }
        }}
      >
        <Swiper
          slidesPerView={slidesPerView}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          spaceBetween={16}
          slidesPerGroup={slidesPerView}
          loop={false}
          loopFillGroupWithBlank={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {products.map((product) => (
            <div key={product.description}>
              <SwiperSlide>
                <Image
                  width="100%"
                  height="70%"
                  src={product.image}
                  alt="sobre"
                />
                <Stack spacing={2} py={5} textAlign="center">
                  <Heading color="gray.900" size="lg">{product.name} {product.description}</Heading>
                  <Text color="gray.500">{product.price}</Text>
                </Stack>
              </SwiperSlide>
            </div>
          ))}
        </Swiper>
      </Box>
    </>
  );
}
