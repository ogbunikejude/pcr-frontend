import axios from 'axios';

export const login = async (body) => {
  const { data } = await axios.post(
    'https://patient-clinical-record-api.herokuapp.com/user/login',
    body
  );
  return data;
};

// `${process.env.REACT_APP_API_BASE_URL_STAGING}/user/login`
