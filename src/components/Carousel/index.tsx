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
import {
  Box,
  chakra,
  Flex,
  Heading,
  useBreakpointValue,
} from '@chakra-ui/react';
import Image from 'next/image';

import { products } from './produts';

export function Carousel() {
  const slidesPerView = useBreakpointValue({
    base: 1,
    sm: 1,
    md: 2,
    lg: 3,
  });

  const widthSlides = useBreakpointValue({
    base: '500px',
    sm: '400px',
    lg: '500px',
  });

  const OurImage = chakra(Image, {
    shouldForwardProp: (prop) =>
      ['width', 'height', 'src', 'alt', 'layout'].includes(prop),
  });

  return (
    <>
      <Box
        px={[4, 8, 8, 8]}
        sx={{
          '.swiper-slide': {
            height: '100%',
            width: '100%',
            img: {
              boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.555)',
              objectFit: 'fill',
            },
            borderRadius: '8px',
            background: 'white',
          },
          '.swiper-button-next': {
            color: 'gray.100',
            top: '45%',
          },
          '.swiper-button-prev': {
            color: 'gray.100',
            top: '45%',
          },
        }}
      >
        <Swiper
          slidesPerView={slidesPerView}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          spaceBetween={24}
          slidesPerGroup={slidesPerView}
          loop={false}
          loopFillGroupWithBlank={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {products.map((product) => (
            <div key={product.description}>
              <SwiperSlide>
                <Flex
                  width="100%"
                  height={['400px', '500px']}
                  flexDirection="column"
                >
                  <Box width="100%" height={['300px', '400px']} position="relative">
                    <OurImage
                      src={product.image}
                      alt="sobre"
                      layout="fill"
                      borderRadius="8px"
                    />
                  </Box>

                  <Heading color="gray.900" size="md" py={5} textAlign="center">
                    {product.name} {product.description}
                  </Heading>
                </Flex>
              </SwiperSlide>
            </div>
          ))}
        </Swiper>
      </Box>
    </>
  );
}
