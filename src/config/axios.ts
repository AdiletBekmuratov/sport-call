import axios from 'axios';

import { API_URL } from '@/redux/http';

const axiosInstance = axios.create({
  baseURL: API_URL,
});

export default axiosInstance;
