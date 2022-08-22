import { Box, BoxProps } from '@chakra-ui/react';
import React from 'react';

type ContainerProps = {
  children: React.ReactNode;
} & BoxProps;

const Container = ({ children, ...rest }: ContainerProps) => {
  return (
    <Box
      maxWidth={1440}
      marginLeft="auto"
      marginRight="auto"
      width="100%"
      px={[4, 8, 8, 8, 8]}
      {...rest}
    >
      {children}
    </Box>
  );
};

export default Container;
