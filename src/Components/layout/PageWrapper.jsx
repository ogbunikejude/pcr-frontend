import { Flex } from '@chakra-ui/react';
import React from 'react';
import { useLocation } from 'react-router-dom';

import Content from './Content';
import Sidebar from './Sidebar';

function PageWrapper({ children }) {
  const { pathname } = useLocation();

  const hideLayout =
    pathname !== '/user/login' && pathname !== '/user/register';

  return (
    <Flex w="100%" minH="100vh">
      {hideLayout && <Sidebar />}
      <Content>{children}</Content>
    </Flex>
  );
}

export default PageWrapper;
