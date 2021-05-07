import React, { useState } from 'react';
import {
  Box,
  Flex,
  Heading,
  SimpleGrid,
  FormLabel,
  Text,
  HStack,
  Image,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';

import { ReactComponent as DownloadCloud } from '../../Assets/icons/cloud.svg';
import { ReactComponent as Goback } from '../../Assets/icons/goback.svg';
import TextInput from '../../Components/common/Inputs';
import BlueBtn from '../../Components/common/Buttons';
import { editPatient } from '../../Queries/patient';
import { uploadImage } from '../../Queries/upload';

export default function EditPatient() {
  const { register, handleSubmit } = useForm();
  const [profile, setProfile] = useState(null);
  const history = useHistory();

  const handleEditPatient = async ({
    firstName,
    lastName,
    email,
    address,
    phoneNumber,
    height,
    weight,
    age,
    condition,
    medication,
    allergies,
  }) => {
    try {
      await editPatient({
        profilePicture: {
          id: profile.public_id,
          url: profile.secure_url,
        },
        firstName,
        lastName,
        email,
        address,
        phoneNumber,
        height,
        weight,
        age,
        condition,
        medication,
        allergies,
      });
      toast.success('Patient edited successfuly');
      history.push('/patient');
    } catch (error) {
      toast.error(
        error.response?.data?.message || 'Failed to edit patient'
      );
    }
  };

  const handleProfilePicture = async (e) => {
    const file = e.target.files[0];
    const imageData = await uploadImage(file);
    setProfile(imageData);
  };
  return (
    <Box w="100%" minH="100vh" margin="2rem 4rem">
      <HStack spacing={400}>
        <Goback
          style={{ width: '2.5rem' }}
          onClick={() => history.goBack()}
        />
        <Heading as="h1" fontSize="2.5rem">
          Edit Patient
        </Heading>
      </HStack>

      <Box>
        <Box
          as="form"
          onSubmit={handleSubmit(handleEditPatient)}
          w="100%"
          mt="5rem"
        >
          <SimpleGrid columns={2} spacingY="1.5rem" spacingX="1rem">
            <Box w="95%">
              <FormLabel Size="4rem" opacity="0.8">
                First Name
              </FormLabel>
              <TextInput
                placeholder="First name"
                h="45px"
                overflow="hidden"
                bg="#fff"
                border="none"
                name="firstName"
                {...register('firstName', { required: true })}
              />
            </Box>

            <Box w="95%">
              <FormLabel fontSize="1.4rem" opacity="0.8">
                Last Name
              </FormLabel>
              <TextInput
                placeholder="Last name"
                h="45px"
                overflow="hidden"
                bg="#fff"
                border="none"
                name="lastName"
                {...register('lastName', { required: true })}
              />
            </Box>

            <Box w="95%">
              <FormLabel fontSize="1.4rem" opacity="0.8">
                Phone Number
              </FormLabel>
              <TextInput
                placeholder="Phone Number"
                h="45px"
                overflow="hidden"
                bg="#fff"
                border="none"
                name="phoneNumber"
                {...register('phoneNumber', { required: true })}
              />
            </Box>

            <Box w="95%">
              <FormLabel fontSize="1.4rem" opacity="0.8">
                Home Address
              </FormLabel>
              <TextInput
                placeholder="Address"
                h="45px"
                overflow="hidden"
                bg="#fff"
                border="none"
                name="address"
                {...register('address', { required: true })}
              />
            </Box>

            <Box>
              <FormLabel fontSize="1.4rem" opacity="0.8">
                Profile Picture
              </FormLabel>
              {profile ? (
                <Image src={profile.secure_url} />
              ) : (
                <Flex
                  justify="center"
                  align="center"
                  bg="#fff"
                  h="80px"
                  width="226px"
                  borderRadius="10px"
                  position="relative"
                  mt="1rem"
                >
                  <Box
                    border="dashed rgba(0,0,0,0.6) 2.5px"
                    opacity="0.7"
                    borderRadius="20px"
                    w="100%"
                    align="center"
                    py="3px"
                  >
                    <DownloadCloud style={{ width: '4rem' }} />
                    <Text fontSize="1rem">
                      Upload
                      <Text as="span" color="#55b1d8">
                        Image here
                      </Text>
                    </Text>
                  </Box>
                  <TextInput
                    type="file"
                    w="100%"
                    h="100%"
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    opacity="0"
                    onChange={handleProfilePicture}
                  />
                </Flex>
              )}
            </Box>
            <Box w="95%">
              <FormLabel fontSize="1.4rem" opacity="0.8">
                Email Address
              </FormLabel>
              <TextInput
                placeholder="Email Address"
                h="45px"
                overflow="hidden"
                bg="#fff"
                border="none"
                name="email"
                {...register('email', { required: true })}
              />
            </Box>
            <Box w="95%">
              <FormLabel fontSize="1.4rem" opacity="0.8">
                Weight
              </FormLabel>
              <TextInput
                placeholder="Weight"
                h="45px"
                overflow="hidden"
                bg="#fff"
                border="none"
                name="weight"
                {...register('weight', { required: true })}
              />
            </Box>
            <Box w="95%">
              <FormLabel fontSize="1.4rem" opacity="0.8">
                Height
              </FormLabel>
              <TextInput
                placeholder="Height"
                h="45px"
                overflow="hidden"
                bg="#fff"
                border="none"
                name="height"
                {...register('height', { required: true })}
              />
            </Box>
            <Box w="95%">
              <FormLabel fontSize="1.4rem" opacity="0.8">
                Age
              </FormLabel>
              <TextInput
                placeholder="Age"
                h="45px"
                overflow="hidden"
                bg="#fff"
                border="none"
                name="age"
                {...register('age', { required: true })}
              />
            </Box>
            <Box>
              <BlueBtn
                borderRadius="1rem"
                p="1.5rem 2rem"
                fontSize="1.2rem"
                type="submit"
                // isDisabled={(!profile)}
              >
                Edit Patient
              </BlueBtn>
            </Box>
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  );
}
