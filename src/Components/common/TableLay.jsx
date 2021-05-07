import React from 'react';
// import { Flex, Box, Text } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';

function TableLay(props) {
  const { children, ...rest } = props;
  return (
    <Text w="12%" align="center" {...rest}>
      {children}
    </Text>

    // <Flex w="100%">
    //   <Box w="10%">ID</Box>
    //   <Box w="10%">Vehicle Name</Box>
    //   <Text w="10%">Plate Number</Text>
    //   <Text w="10%">Vehicle Model</Text>
    //   <Text w="10%">Production Year</Text>
    //   <Text w="10%">Color</Text>
    //   <Text w="10%">Assigned Driver</Text>
    //   <Text w="10%">Condition</Text>
    //   <Box>{children}</Box>
    // </Flex>
  );
}

export default TableLay;
