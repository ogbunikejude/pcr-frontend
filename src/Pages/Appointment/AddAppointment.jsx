import React from 'react';
import { Box, Text, VStack, FormLabel } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { RightModal } from '../../Components/common/modals/RightModal';
import TextInput from '../../Components/common/Inputs';
import BlueBtn from '../../Components/common/Buttons';
import { addAppointment } from '../../Queries/appointment';

export default function AddAppointment({
  showRightModal,
  setShowRightModal,
}) {
  const { handleSubmit, register } = useForm();
  const handleAddAppointment = async ({
    email,
    firstName,
    date,
    time,
  }) => {
    try {
      await addAppointment({
        email,
        firstName,
        date,
        time,
      });
      toast.success('Appointment Added successfuly');
    } catch (error) {
      toast.error(
        error.response?.data?.message || 'Failed to add Appointment'
      );
    }
  };

  return (
    <RightModal
      showModal={showRightModal}
      setShowModal={setShowRightModal}
      p="0"
    >
      <Box px="6.5rem">
        <Box pt="1.2rem">
          <Text fontWeight="600" fontSize="2rem" lineHeight="2rem">
            Add Appointment
          </Text>
        </Box>
        <VStack
          as="form"
          onSubmit={handleSubmit(handleAddAppointment)}
          w="100%"
          align="flex-start"
          spacing="1.5rem"
          mt="1rem"
        >
          <Box w="95%">
            <FormLabel fontSize="1.2rem" opacity="0.8">
              First Name
            </FormLabel>
            <TextInput
              placeholder="First Name"
              h="45px"
              overflow="hidden"
              bg="#fff"
              border="none"
              name="firstName"
              {...register('firstName', { required: true })}
            />
          </Box>
          <Box w="95%">
            <FormLabel fontSize="1.2rem" opacity="0.8">
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
            <FormLabel fontSize="1.2rem" opacity="0.8">
              Appointment Date
            </FormLabel>
            <TextInput
              placeholder="Appointment Date"
              h="45px"
              overflow="hidden"
              bg="#fff"
              border="none"
              name="date"
              {...register('date', { required: true })}
            />
          </Box>
          <Box w="95%">
            <FormLabel fontSize="1.2rem" opacity="0.8">
              Appointment Time
            </FormLabel>
            <TextInput
              placeholder="Appointment Time"
              h="45px"
              overflow="hidden"
              bg="#fff"
              border="none"
              name="time"
              {...register('time', { required: true })}
            />
          </Box>
          <Box>
            <BlueBtn type="submit">Save</BlueBtn>
          </Box>
        </VStack>
      </Box>
    </RightModal>
  );
}
