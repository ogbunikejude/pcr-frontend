import { Box } from '@chakra-ui/react';
import React from 'react';

function Content({ children }) {
  return (
    <Box minh="100vh" flex="1">
      {children}
    </Box>
  );
}

export default Content;

// overflowX="hidden"
