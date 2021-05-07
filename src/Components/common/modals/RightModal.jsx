import React from 'react';
import { Box, Text } from '@chakra-ui/react';

import CloseBtn from './CloseBtn';

function RightModal(props) {
  const { title, children, showModal, setShowModal, ...rest } = props;

  function closemodal() {
    setShowModal(false);
  }

  return (
    <>
      {showModal && (
        <Box
          w="100vw"
          h="100vh"
          position="fixed"
          zIndex="100"
          top="0"
          left="0"
          background="rgba(255, 255, 255, .2)"
          style={{ backdropFilter: 'blur(2px)' }}
        >
          <Box
            w="510px"
            h="100vh"
            p="33px 55px 60px"
            boxShadow="0px 4px 8px rgba(0, 0, 0, 0.1)"
            bg="#fff"
            position="absolute"
            top="0"
            right="0"
            zIndex=""
            {...rest}
          >
            <CloseBtn top="33px" left="55px" closemodal={closemodal}>
              <svg
                width="7"
                height="11"
                viewBox="0 0 7 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  // eslint-disable-next-line max-len
                  d="M5.9478 11C5.67961 11 5.41002 10.9049 5.20502 10.7147L0.308903 6.19363C0.110924 6.00992 2.25013e-07 5.76107 2.36403e-07 5.50049C2.47736e-07 5.24121 0.110925 4.99236 0.308903 4.80865L5.20502 0.285009C5.61643 -0.0954361 6.28197 -0.0954361 6.69338 0.287614C7.10338 0.670665 7.10197 1.28954 6.69057 1.66998L2.54424 5.50049L6.69057 9.33099C7.10197 9.71144 7.10337 10.329 6.69338 10.7121C6.48838 10.9049 6.21738 11 5.9478 11Z"
                  fill="#C4C4C4"
                />
              </svg>
              <Text ml="1rem" color="#939AA3">
                Back
              </Text>
            </CloseBtn>
            <Text
              fontFamily="bold"
              fontSize="2.4rem"
              mt="6.4rem"
              textTransform="capitalize"
            >
              {title}
            </Text>
            <Box>{children}</Box>
          </Box>
        </Box>
      )}
    </>
  );
}

export { RightModal };
