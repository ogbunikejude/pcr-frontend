import React from 'react';
import { Flex } from '@chakra-ui/react';

function CloseBtn(props) {
  const { closemodal, children, ...rest } = props;

  return (
    <Flex
      align="center"
      position="absolute"
      cursor="pointer"
      {...rest}
      onClick={closemodal}
    >
      {children}
    </Flex>
  );
}

export default CloseBtn;
