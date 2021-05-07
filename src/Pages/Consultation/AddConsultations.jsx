import React from 'react';
import { Box, Text, VStack, FormLabel } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { RightModal } from '../../Components/common/modals/RightModal';
import TextInput from '../../Components/common/Inputs';
import BlueBtn from '../../Components/common/Buttons';
import { updatePatientCondition } from '../../Queries/patient';

export default function AddConsultations({
  showRightModal,
  setShowRightModal,
}) {
  const { handleSubmit, register } = useForm();

  const handleAddConsultation = async ({
    dateDiagnosed,
    condition,
    medication,
    allergies,
  }) => {
    try {
      await updatePatientCondition({
        condition,
        medication,
        allergies,
        dateDiagnosed,
      });
      toast.success('Patient Conditions edited successfuly');
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          'Failed to edit patient condition'
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
            Add Patient Conditions
          </Text>
        </Box>
        <VStack
          as="form"
          onSubmit={handleSubmit(handleAddConsultation)}
          w="100%"
          align="flex-start"
          spacing="1.5rem"
          mt="1rem"
        >
          <Box w="95%">
            <FormLabel fontSize="1rem" opacity="0.8">
              Medications Prescribed
            </FormLabel>
            <TextInput
              placeholder="Medications Prescribed"
              h="45px"
              overflow="hidden"
              bg="#fff"
              border="none"
              name="medication"
              {...register('medication', { required: true })}
            />
          </Box>
          <Box w="95%">
            <FormLabel fontSize="1rem" opacity="0.8">
              Condition
            </FormLabel>
            <TextInput
              placeholder="Conditions Diagnosed"
              h="45px"
              overflow="hidden"
              bg="#fff"
              border="none"
              name="condition"
              {...register('condition', { required: true })}
            />
          </Box>
          <Box w="95%">
            <FormLabel fontSize="1rem" opacity="0.8">
              Allergies
            </FormLabel>
            <TextInput
              placeholder="Allergies"
              h="45px"
              overflow="hidden"
              bg="#fff"
              border="none"
              name="allergies"
              {...register('allergies', { required: true })}
            />
          </Box>
          <Box w="95%">
            <FormLabel fontSize="1rem" opacity="0.8">
              Date Diagnosed
            </FormLabel>
            <TextInput
              placeholder="Date Diagnosed"
              h="45px"
              overflow="hidden"
              bg="#fff"
              border="none"
              name="dateDiagnosed"
              {...register('dateDiagnosed', { required: true })}
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
