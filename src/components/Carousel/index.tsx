import {
  Box,
  chakra,
  Flex,
  Heading,
  Text,
  useBreakpointValue,
  Image,
} from '@chakra-ui/react';
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
            <SwiperSlide key={`${product.name} ${product.description}`}>
              <Flex
                width="100%"
                height={['500px', '600px']}
                flexDirection="column"
                textAlign="center"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width="100%"
                  height={['300px', '350px']}
                  borderRadius="8px"
                  objectFit="contain"
                />

                <Heading color="gray.900" size="md" py={5}>
                  {product.name}
                </Heading>

                {!!product.price && !Array.isArray(product.price) && (
                  <Flex align="center" justify="center">
                    <Text color="gray.900" fontWeight="bold" mr={2} as="span">
                      Preço:
                    </Text>
                    <Text color="gray.900">{product.price}</Text>
                  </Flex>
                )}
                {!!product.price && Array.isArray(product.price) && (
                  <Text color="gray.900" fontWeight="bold" mr={2}>
                    Preços:
                  </Text>
                )}
                <Flex align="center" justify="center">
                  <Text color="gray.900" fontWeight="bold" mr={2} as="span">
                    Medida:
                  </Text>
                  <Text color="gray.900">{product.description}</Text>
                </Flex>

                {!!product.price &&
                  Array.isArray(product.price) &&
                  product.price.map((price: string) => (
                    <Text color="gray.900" key={price}>
                      {price}
                    </Text>
                  ))}
              </Flex>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </>
  );
}
