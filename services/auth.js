import axios from "axios";

import { getFullUrl } from "./helper";

const handleSignUp = async (params) => {
  const response = await axios.post(getFullUrl("api/signUp"), params);
  return response;
};

const handleLogin = async ({ email, password }) => {
  const response = await axios.post(getFullUrl("api/login"), params);
  return response;
};

const registerServices = {};
export default authServices;
