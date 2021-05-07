import { Box, Flex, Heading, Spinner, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';

import BlueBtn from '../../Components/common/Buttons';
import TableComponent from '../../Components/common/Table';
import { TableOptions } from '../../Components/common/TableOptions';
import {
  deleteAppointment,
  getAppointments,
} from '../../Queries/appointment';
import { handleError } from '../../Utils/error';

import AddAppointment from './AddAppointment';
// import EditAppointment from './EditAppointment';

export default function AppointmentLists() {
  const [showAddModal, setShowAddModal] = useState(false);
  const { isLoading, isError, error, data, refetch } = useQuery(
    'getAppointments',
    getAppointments
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
    await deleteAppointment(id);
    refetch();
    toast.success('Appointment Deleted successfully');
  };

  const columns = [
    {
      Header: 'First Name',
      accessor: 'firstName',
    },
    {
      Header: 'Email address',
      accessor: 'email',
    },
    {
      Header: 'Appointment Date ',
      accessor: 'date',
    },
    {
      Header: 'Appointment Time ',
      accessor: 'time',
    },
    {
      Header: 'Date created ',
      accessor: 'createdAt',
    },
    {
      Header: 'Actions',
      accessor: 'actions',
      Cell: ({ value }) => (
        <TableOptions
          viewUrl={`/appointment/${value}`}
          editUrl={`/appointment/edit/${value}`}
          handleDelete={() => handleDelete(value)}
        />
      ),
    },
  ];

  const tableData = data.data.map((item) => ({
    firstName: item.firstName,
    email: item.email,
    date: item.date,
    time: item.time,
    createdAt: item.createdAt,
    actions: item._id,
  }));

  return (
    <Box w="100%" margin="2rem 2rem">
      <Flex w="100%" align="center" justify="space-between">
        <Heading fontSize="2.5rem" fontWeight="bold">
          Appointment
        </Heading>
        <BlueBtn onClick={() => setShowAddModal(true)}>
          Add Appointment
        </BlueBtn>
      </Flex>

      <TableComponent columns={columns} data={tableData} />

      <AddAppointment
        showRightModal={showAddModal}
        setShowRightModal={setShowAddModal}
      />
    </Box>
  );
}
