import { AES, enc } from 'crypto-js';

export const decryptToken = (data) => {
  try {
    if (data) {
      const bytes = AES.decrypt(
        data,
        'hohofjojrojiuhibauysgwhnduygeifhiufhehfiuhejfohefijofjoefo'
      );
      return JSON.parse(bytes.toString(enc.Utf8));
    }
    window.location.replace('/user/login');
  } catch (error) {
    localStorage.clear();
    window.location.replace('/user/login');
  }
};

// process.env.REACT_APP_AUTH_KEY
