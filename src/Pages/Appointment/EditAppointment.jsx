import React from 'react';
import { Box, Text, VStack, FormLabel } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import TextInput from '../../Components/common/Inputs';
import BlueBtn from '../../Components/common/Buttons';
import { editAppointment } from '../../Queries/appointment';

export default function EditAppointment() {
  const { handleSubmit, register } = useForm();
  const handleEditAppointment = async ({
    email,
    firstName,
    date,
    time,
  }) => {
    try {
      await editAppointment({
        email,
        firstName,
        date,
        time,
      });
      toast.success('Appointment Edited successfuly');
    } catch (error) {
      toast.error(
        error.response?.data?.message || 'Failed to edit Appointment'
      );
    }
  };

  return (
    <Box margin="2rem 4rem">
      <Box pt="2.4rem">
        <Text fontWeight="600" fontSize="2.5rem" lineHeight="3.8rem">
          Edit Appointment
        </Text>
      </Box>
      <VStack
        as="form"
        onSubmit={handleSubmit(handleEditAppointment)}
        w="100%"
        align="flex-start"
        spacing="2rem"
        mt="3rem"
      >
        <Box w="95%">
          <FormLabel fontSize="1.4rem" opacity="0.8">
            Appointment Date
          </FormLabel>
          <TextInput
            placeholder="Appointment Date"
            h="45px"
            overflow="hidden"
            bg="#fff"
            border="none"
            name="date"
            {...register('date', { required: false })}
          />
        </Box>
        <Box w="95%">
          <FormLabel fontSize="1.4rem" opacity="0.8">
            Appointment Time
          </FormLabel>
          <TextInput
            placeholder="Appointment Time"
            h="45px"
            overflow="hidden"
            bg="#fff"
            border="none"
            name="time"
            {...register('firstName', { required: false })}
          />
        </Box>
        <Box>
          <BlueBtn type="submit">Save</BlueBtn>
        </Box>
      </VStack>
    </Box>
  );
}
