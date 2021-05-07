import { Box, Flex, Heading, Spinner, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';

import BlueBtn from '../../Components/common/Buttons';
import TableComponent from '../../Components/common/Table';
import { TableOptions } from '../../Components/common/TableOptions';
import { deletePatient, getPatients } from '../../Queries/patient';
import { handleError } from '../../Utils/error';

import AddConsultations from './AddConsultations';

export default function ConsultationList() {
  const [showAddModal, setShowAddModal] = useState(false);
  const { isLoading, isError, error, data, refetch } = useQuery(
    'getPatients',
    getPatients
  );
  // console.log('data', data);

  if (isLoading) {
    return <Spinner size="xl" />;
  }

  if (isError) {
    handleError(error);
    return <Text>Error Occured</Text>;
  }

  const handleDelete = async (id) => {
    await deletePatient(id);
    refetch();
    toast.success('Patient Deleted successfully');
  };

  const columns = [
    {
      Header: 'First Name',
      accessor: 'firstName',
    },
    {
      Header: 'Last Name',
      accessor: 'lastName',
    },
    {
      Header: 'Email address',
      accessor: 'email',
    },
    {
      Header: 'Medical Condition',
      accessor: 'condition',
    },
    {
      Header: 'Medications Prescribed',
      accessor: 'medication',
    },
    {
      Header: 'Allergies',
      accessor: 'allergies',
    },
    {
      Header: 'Date Diagnosed',
      accessor: 'dateDiagnosed',
    },
    {
      Header: 'Actions',
      accessor: 'actions',
      Cell: ({ value }) => (
        <TableOptions
          viewUrl={`/patient/${value}`}
          editUrl={`/patient/edit/${value}`}
          handleDelete={() => handleDelete(value)}
        />
      ),
    },
  ];

  const tableData = data.data.map((item) => ({
    firstName: item.firstName,
    lastName: item.lastName,
    email: item.email,
    condition: item.condition,
    medication: item.medication,
    allergies: item.allergies,
    dateDiagnosed: item.dateDiagnosed,
    actions: item._id,
  }));

  return (
    <Box w="100%" margin="2rem 2rem">
      <Flex w="100%" align="center" justify="space-between">
        <Heading fontSize="4rem" fontWeight="bold">
          Patient
        </Heading>
        <BlueBtn onClick={() => setShowAddModal(true)}>
          Add Consultation
        </BlueBtn>
      </Flex>

      <TableComponent columns={columns} data={tableData} />

      <AddConsultations
        showRightModal={showAddModal}
        setShowRightModal={setShowAddModal}
      />
    </Box>
  );
}
