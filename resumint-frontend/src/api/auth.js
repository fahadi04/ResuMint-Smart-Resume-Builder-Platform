import api from './axios';

export const loginUser = async (credentials) => {
  const response = await api.post('/api/auth/login', credentials);
  return response.data;
};

export const registerUser = async (userData) => {
  const response = await api.post('/api/auth/register', userData);
  return response.data;
};

export const verifyEmailToken = async (token) => {
    const response = await api.get(`/api/auth/verify-email?token=${token}`);
    return response.data;
};

export const getProfile = async () => {
    const response = await api.get('/api/auth/profile');
    return response.data;
};
