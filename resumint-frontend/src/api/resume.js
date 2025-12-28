import api from './axios';

export const getResumes = async () => {
    const response = await api.get('/api/resumes');
    return response.data;
};

export const createResume = async (title) => {
    const response = await api.post('/api/resumes', { title });
    return response.data;
};

export const deleteResume = async (id) => {
    const response = await api.delete(`/api/resumes/${id}`);
    return response.data;
};

export const getResumeById = async (id) => {
    const response = await api.get(`/api/resumes/${id}`);
    return response.data;
};

export const updateResume = async (id, data) => {
    const response = await api.put(`/api/resumes/${id}`, data);
    return response.data;
};
