import axios from 'axios';

const axiosMain = axios.create({
  baseURL: 'http://localhost:3500',
  withCredentials: true,
});

export default axiosMain;
