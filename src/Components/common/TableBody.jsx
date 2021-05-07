import React from 'react';
import { Box, Flex } from '@chakra-ui/react';

function TableBody(props) {
  const { children, ...rest } = props;
  return (
    <Box w="95%" borderRadius="5px" bg="#fff" my="20px" {...rest}>
      <Flex py="10px" px="3px">
        {children}
      </Flex>
    </Box>
  );
}

export default TableBody;
