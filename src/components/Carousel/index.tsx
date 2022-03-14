import {
  Box,
  chakra,
  Flex,
  Heading,
  Text,
  useBreakpointValue
} from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
// import required modules
import { Navigation, Pagination } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../../tsconfig.json';
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
        sx={{
          '.swiper-slide': {
            height: '100%',
            width: '100%',
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
                  height={['500px', '600px']}
                  flexDirection="column"
                  textAlign="center"
                >
                  <Box
                    width="100%"
                    height={['300px', '400px']}
                    position="relative"
                  >
                    <OurImage
                      src={product.image}
                      alt="sobre"
                      layout="fill"
                      borderRadius="8px"
                      objectFit="contain"
                    />
                  </Box>

                  <Heading color="gray.900" size="md" py={5}>
                    {product.name} {product.description}
                  </Heading>
                  {!!product.price && (
                    <Text fontSize="mb" color="gray.500">
                      <Text as="span" fontWeight="bold" fontSize="lg" color="black">
                        Preço:
                      </Text>{' '}
                      {product.price}
                    </Text>
                  )}
                  {!!product.thousand && (
                    <Text fontSize="mb" color="gray.500">
                      <Text as="span" fontWeight="bold" fontSize="lg" color="black">
                        Milheiro:
                      </Text>{' '}
                      {product.thousand}
                    </Text>
                  )}
                </Flex>
              </SwiperSlide>
            </div>
          ))}
        </Swiper>
      </Box>
    </>
  );
}
