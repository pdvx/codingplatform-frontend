import axios from 'axios';

import serviceHelper from './helper';

const signUp = async (params) => {
  try {
    const response = await axios.post(serviceHelper.getFullUrl('signUp'), {
      data: params,
    });
    return response;
  } catch (error) {
    console.log('error:', error);
  }
};

const login = async (params) => {
  try {
    const response = await axios.post(serviceHelper.getFullUrl('login'), {
      data: params,
    });
    return response;
  } catch (error) {
    console.log('error:', error);
  }
};

const logout = async (params) => {
  try {
    const response = await axios.post(serviceHelper.getFullUrl('logout'), {
      data: params,
    });
    return response;
  } catch (error) {
    console.log('error:', error);
  }
};

const authServices = { signUp, login };
export default authServices;
