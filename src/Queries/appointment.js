import instance from './axios.config';

export const getAppointments = async () => {
  const { data } = await instance.get('/appointment');
  return data;
};
export const getAppointment = async (id, body) => {
  const { data } = await instance.get(`/appointment/${id}`, body);
  return data;
};

export const addAppointment = async (body) => {
  const { data } = await instance.post('/appointment', body);
  return data;
};

export const editAppointment = async (id, body) => {
  const { data } = await instance.patch(`/appointment/${id}`, body);
  return data;
};

export const deleteAppointment = async (id, body) => {
  await instance.delete(`/appointment/${id}`, body);
  return null;
};
