import { Box, Flex, Heading, Spinner, Text } from '@chakra-ui/react';
import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import BlueBtn from '../../Components/common/Buttons';
import TableComponent from '../../Components/common/Table';
import { TableOptions } from '../../Components/common/TableOptions';
import { deletePatient, getPatients } from '../../Queries/patient';
import { handleError } from '../../Utils/error';

export default function PatientList() {
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
      Header: 'Phone Number',
      accessor: 'phoneNumber',
    },
    {
      Header: 'Home Address',
      accessor: 'address',
    },
    {
      Header: 'Email Address',
      accessor: 'email',
    },
    {
      Header: 'Height(cm)',
      accessor: 'height',
    },
    {
      Header: 'Weight(Kg)',
      accessor: 'weight',
    },
    {
      Header: 'Age(Yrs)',
      accessor: 'age',
    },
    {
      Header: 'Created by',
      accessor: 'user',
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
    phoneNumber: item.phoneNumber,
    address: item.address,
    email: item.email,
    height: item.height,
    weight: item.weight,
    age: item.age,
    user: item.user.email,
    actions: item._id,
  }));

  return (
    <Box w="100%" ml="1rem" p="2rem 0">
      <Flex w="100%" align="center" justify="space-between">
        <Heading fontSize="2.5rem" fontWeight="bold">
          Patients
        </Heading>
        <BlueBtn as={Link} to="/patient/add">
          Add Patient
        </BlueBtn>
      </Flex>

      <TableComponent columns={columns} data={tableData} />
    </Box>
  );
}
