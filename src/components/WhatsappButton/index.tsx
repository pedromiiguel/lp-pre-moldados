import { Flex, Image } from '@chakra-ui/react';
import React from 'react';

type WhatsappButtonProps = {
  phoneNumber: string;
  text: string;
};

export const WhatsappButton = ({ phoneNumber, text }: WhatsappButtonProps) => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      position="fixed"
      bottom="20px"
      right="20px"
      zIndex="100"
      cursor="pointer"
      as="a"
      bg="#45c655"
      borderRadius="100%"
      padding="12px 10px 11px 12px"
      target="_blank"
      href={`https://api.whatsapp.com/send?phone=55${phoneNumber}&text=${text}`}
    >
      <Image
        src="/whatsapp-icon.svg"
        alt="ícone do whatsapp"
        width="42px"
        height="42px"
      />
    </Flex>
  );
};
