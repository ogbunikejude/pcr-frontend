import React from 'react';
import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  Spinner,
  Text,
} from '@chakra-ui/react';
import { useQuery } from 'react-query';
import { useHistory, useParams } from 'react-router-dom';

import { getPatientDetails } from '../../Queries/patient';
import { ReactComponent as Goback } from '../../Assets/icons/goback.svg';
import { handleError } from '../../Utils/error';

export default function PatientDetails() {
  const history = useHistory();
  const { id } = useParams();

  const { data, isLoading, isError, error } = useQuery(
    ['getPatientDetails', id],
    () => getPatientDetails(id)
  );

  if (isLoading) {
    return <Spinner size="xl" />;
  }

  if (isError) {
    handleError(error);
    return <Text>Error Occured</Text>;
  }
  return (
    <Box margin="2rem 4rem">
      <HStack spacing={500}>
        <Goback
          style={{ cursor: 'pointer' }}
          onClick={() => history.goBack()}
        />
        <Heading fontSize="2.5rem" fontWeight="bold">
          Patient Profile
        </Heading>
      </HStack>

      <Flex mt="4rem">
        <HStack spacing="4rem" align="flex-start">
          <Image
            src={data.profilePicture.url}
            w="15rem"
            h="15rem"
            objectFit="cover"
            alt="profile Picture"
            borderRadius="1rem"
          />
          <Flex align="center" wrap="wrap" w="40rem">
            <Box mt="1rem" mr="2rem">
              <Text color="#B5B5B5">First name</Text>
              <Text
                fontSize="1.2rem"
                fontWeight="bold"
                color="#4A4A4A"
              >
                {data.firstName}
              </Text>
            </Box>
            <Box mt="1rem" mr="2rem">
              <Text color="#B5B5B5">Last name</Text>
              <Text
                fontSize="1.2rem"
                fontWeight="bold"
                color="#4A4A4A"
              >
                {data.lastName}
              </Text>
            </Box>
            <Box mt="1rem" mr="2rem">
              <Text color="#B5B5B5">Home Address</Text>
              <Text
                fontSize="1.2rem"
                fontWeight="bold"
                color="#4A4A4A"
              >
                {data.address}
              </Text>
            </Box>
            <Box mt="1rem" mr="2rem">
              <Text color="#B5B5B5">Email Address</Text>
              <Text
                fontSize="1.2rem"
                fontWeight="bold"
                color="#4A4A4A"
              >
                {data.email}
              </Text>
            </Box>
            <Box mt="1rem" mr="2rem">
              <Text color="#B5B5B5">Height(cm)</Text>
              <Text
                fontSize="1.2rem"
                fontWeight="bold"
                color="#4A4A4A"
              >
                {data.height}
              </Text>
            </Box>
            <Box mt="1rem" mr="2rem">
              <Text color="#B5B5B5">Weight(Kg)</Text>
              <Text
                fontSize="1.2rem"
                fontWeight="bold"
                color="#4A4A4A"
              >
                {data.weight}
              </Text>
            </Box>
            <Box mt="1rem" mr="2rem">
              <Text color="#B5B5B5">Age(Yrs)</Text>
              <Text
                fontSize="1.2rem"
                fontWeight="bold"
                color="#4A4A4A"
              >
                {data.age}
              </Text>
            </Box>
            <Box mt="1rem" mr="2rem">
              <Text color="#B5B5B5">Phone Number</Text>
              <Text
                fontSize="1.2rem"
                fontWeight="bold"
                color="#4A4A4A"
              >
                {data.phoneNumber}
              </Text>
            </Box>
          </Flex>
        </HStack>
      </Flex>
    </Box>
  );
}
