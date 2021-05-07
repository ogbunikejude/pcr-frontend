import React from 'react';
import { Button } from '@chakra-ui/react';

function BlueBtn(props) {
  const { children, ...rest } = props;
  return (
    <Button
      fontSize="1.4rem"
      px="2rem"
      py="1rem"
      bg="#55b1d8"
      color="#fff"
      {...rest}
      _hover={{ background: '#55b1d8', opacity: '0.8' }}
    >
      {children}
    </Button>
  );
}
export function WhiteBtn(props) {
  const { children, ...rest } = props;

  return (
    <Button
      fontSize="1.4rem"
      px="50px"
      py="20px"
      bg="#fff"
      mx="5px"
      color="#06D444"
      {...rest}
    >
      {children}
    </Button>
  );
}

export default BlueBtn;
