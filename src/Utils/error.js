import { toast } from 'react-toastify';

export const handleError = (error) => {
  if (error.response.status === 401) {
    localStorage.clear();
    window.location.replace('/user/login');
  }

  toast.error(error.response?.data.message);
};
