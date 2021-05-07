import React, { useState } from 'react';
import {
  Box,
  Flex,
  Heading,
  SimpleGrid,
  FormLabel,
  // HStack,
  Text,
  Image,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';

import { ReactComponent as DownloadCloud } from '../../Assets/icons/cloud.svg';
import { ReactComponent as PwdIcon } from '../../Assets/icons/password icon.svg';
import { ReactComponent as EyeIcon } from '../../Assets/icons/see password icon.svg';
import TextInput from '../../Components/common/Inputs';
import BlueBtn from '../../Components/common/Buttons';
import { addUser } from '../../Queries/register';
import { uploadImage } from '../../Queries/upload';

export default function RegisterUser() {
  const { register, handleSubmit } = useForm();
  const [profile, setProfile] = useState(null);
  const [passwordType, setPasswordType] = useState(true);
  const history = useHistory();

  const handleAddUser = async ({
    firstName,
    lastName,
    email,
    address,
    phoneNumber,
    password,
  }) => {
    try {
      await addUser({
        profilePicture: {
          id: profile.public_id,
          url: profile.secure_url,
        },
        firstName,
        lastName,
        email,
        address,
        phoneNumber,
        password,
      });
      toast.success('User added successfuly');
      history.push('/user/login');
    } catch (error) {
      toast.error(
        error.response?.data?.message || 'Failed to add user'
      );
    }
  };

  const handleProfilePicture = async (e) => {
    const file = e.target.files[0];
    const imageData = await uploadImage(file);
    setProfile(imageData);
  };
  return (
    <Box w="100%" minH="100vh" ml="3rem">
      <Heading as="h1" fontSize="2.5rem" align="left">
        Add Doctor
      </Heading>
      <Box>
        <Box
          as="form"
          onSubmit={handleSubmit(handleAddUser)}
          w="100%"
          mt="5rem"
        >
          <SimpleGrid columns={2} spacingY="2rem" spacingX="1rem">
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
                Password
              </FormLabel>
              <TextInput
                icon={<PwdIcon style={{ width: '1rem' }} />}
                rightIcon={<EyeIcon style={{ width: '1rem' }} />}
                overflow="hidden"
                mt="1.3rem"
                placeholder="Password"
                type={passwordType ? 'password' : 'text'}
                onClick={() => setPasswordType(!passwordType)}
                px="2rem"
                name="password"
                {...register('password', { required: true })}
              />
            </Box>
            <Box>
              <BlueBtn
                borderRadius="10px"
                p="1.5rem 2rem"
                fontSize="1.7rem"
                type="submit"
                isDisabled={!profile}
              >
                Add Doctor
              </BlueBtn>
            </Box>
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  );
}
