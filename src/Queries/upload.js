import { toast } from 'react-toastify';

import instance from './axios.config';

export const uploadImage = async (file) => {
  if (!file.type.startsWith('image')) {
    toast.error('Please select a valid image');
    return;
  }

  if (file.size > 5e6) {
    toast.error('Please select an image below 5mb');
    return;
  }

  const formData = new FormData();
  formData.append('image', file);

  const { data } = await instance.post('/upload', formData);

  toast.success(data.message);
  // eslint-disable-next-line consistent-return
  return data.data;
};
