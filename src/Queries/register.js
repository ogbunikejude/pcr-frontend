import axios from 'axios';

export const addUser = async (body) => {
  const { data } = await axios.post(
    'https://patient-clinical-record-api.herokuapp.com/user/register',
    body
  );
  return data;
};
