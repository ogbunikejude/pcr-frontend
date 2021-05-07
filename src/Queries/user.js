import instance from './axios.config';

// export const addUser = async (body) => {
//   const { data } = await instance.post('/user/register', body);
//   return data;
// };

export const getUserDetails = async () => {
  const { data } = await instance.get(`/user/me`);
  return data.data;
};

export const editUser = async (id, body) => {
  const { data } = await instance.patch(`/user/${id}`, body);
  return data;
};
