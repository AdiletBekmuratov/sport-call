import AsyncStorage from '@react-native-async-storage/async-storage';

import axiosInstance from '@/config/axios'; // у него нету ссылки пока что
import { LoginFormData, RegisterFormData } from '@/types/index';

const register = async (userData: RegisterFormData) => {
  const response = await axiosInstance.post('/auth/register', userData);

  if (response.data) {
    await AsyncStorage.setItem('token', JSON.stringify(response.data));
  }
  return response.data;
};

const login = async (userData: LoginFormData) => {
  const response = await axiosInstance.post('/auth/login', userData);

  if (response.data) {
    await AsyncStorage.setItem('token', JSON.stringify(response.data));
  }

  return response.data;
};

const logout = async () => {
  await AsyncStorage.removeItem('token');
};

const authService = {
  register,
  logout,
  login,
};

export default authService;
