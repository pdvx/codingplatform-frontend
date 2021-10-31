import axios from 'axios';

import { getFullUrl } from './helper';

export default projectServices;
const createProject = async (params) => {
  try {
    const response = await axios.post(serviceHelper.getFullUrl('signUp'), {
      data: params,
    });
    return response;
  } catch (error) {
    console.log('error:', error);
  }
};
