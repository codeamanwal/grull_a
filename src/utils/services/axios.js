import axios from 'axios';
import AuthService from '../../Services/AuthService';
export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
});
const accessToken = AuthService.getToken();
export const axiosGet = async (url, params = {}, contentType = 'application/json') => {
  let response = {};
  try {
    const result = await axiosInstance.get(url, {
      headers: {
        'Content-Type': contentType,
        'Authorization': `Bearer ${accessToken}`,
      },
      params,
    });
    response = result.data || {};
    response.status = result?.status === 200;
    response.message = result?.data?.message;
  } catch (e) {
    response.status = false;
    response.message = 'something went wrong';
    response.data = e;
  }
  return response;
};

