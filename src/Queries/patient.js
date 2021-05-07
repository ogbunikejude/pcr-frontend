import instance from './axios.config';

export const addPatient = async (body) => {
  const { data } = await instance.post('/patient', body);
  return data;
};

export const getPatients = async () => {
  const { data } = await instance.get('/patient?limit=20');
  return data;
};

export const getPatientDetails = async (id) => {
  const { data } = await instance.get(`/patient/${id}`);
  return data.data;
};

export const editPatient = async (id, body) => {
  const { data } = await instance.put(`/patient/${id}`, body);
  return data;
};

export const updatePatientCondition = async (id, body) => {
  const { data } = await instance.patch(`/patient/${id}`, body);
  return data;
};

export const deletePatient = async (id) => {
  await instance.delete(`/patient/${id}`);
  return null;
};
