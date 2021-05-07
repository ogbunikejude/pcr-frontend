import React, { useState } from 'react';
import {
  Box,
  Flex,
  Heading,
  SimpleGrid,
  FormLabel,
  Text,
  Image,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';

import TextInput from '../../Components/common/Inputs';
import BlueBtn from '../../Components/common/Buttons';
import { ReactComponent as DownloadCloud } from '../../Assets/icons/cloud.svg';
// import { ReactComponent as PwdIcon } from '../../Assets/icons/password icon.svg';
// import { ReactComponent as EyeIcon } from '../../Assets/icons/see password icon.svg';
import { editUser } from '../../Queries/user';
import { uploadImage } from '../../Queries/upload';

export default function EditUser() {
  // const [passwordType, setPasswordType] = useState(true);
  const { register, handleSubmit } = useForm();
  const [profile, setProfile] = useState(null);
  const history = useHistory();

  const handleEditUser = async ({ address, phoneNumber }) => {
    try {
      await editUser({
        profilePicture: {
          id: profile.public_id,
          url: profile.secure_url,
        },
        address,
        phoneNumber,
      });
      toast.success('User details edited successfuly');
      history.push('/dashboard');
    } catch (error) {
      toast.error(
        error.response?.data?.message || 'Failed to edit user'
      );
    }
  };

  const handleProfilePicture = async (e) => {
    const file = e.target.files[0];
    const imageData = await uploadImage(file);
    setProfile(imageData);
  };
  return (
    <Box w="100%" minH="100vh" ml="5rem" pos="fixed" pr="2rem">
      <Heading as="h1" align="left" fontSize="3.5rem" mt="2rem">
        Edit Doctor
      </Heading>

      <Box>
        <Box
          as="form"
          onSubmit={handleSubmit(handleEditUser)}
          w="100%"
          mt="3rem"
        >
          <SimpleGrid columns={2} spacingY="2rem">
            <Box w="80%">
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

            <Box w="80%">
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

            <Box>
              <BlueBtn
                borderRadius="10px"
                p="2.2rem 3.5rem"
                fontSize="1.7rem"
                type="submit"
                // isDisabled={(!profile)}
              >
                Edit Doctor
              </BlueBtn>
            </Box>
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  );
}
