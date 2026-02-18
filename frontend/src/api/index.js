import axios from 'axios';

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api'
});

// Projects
export const projectAPI = {
  getAll: () => API.get('/projects'),
  getByCategory: (category) => API.get(`/projects/category/${category}`),
  getById: (id) => API.get(`/projects/${id}`),
  create: (data) => API.post('/projects', data),
  update: (id, data) => API.put(`/projects/${id}`, data),
  delete: (id) => API.delete(`/projects/${id}`)
};

// Skills
export const skillAPI = {
  getAll: () => API.get('/skills'),
  getByCategory: (category) => API.get(`/skills/${category}`),
  create: (data) => API.post('/skills', data),
  update: (id, data) => API.put(`/skills/${id}`, data),
  delete: (id) => API.delete(`/skills/${id}`)
};

// Experience
export const experienceAPI = {
  getAll: () => API.get('/experiences'),
  getById: (id) => API.get(`/experiences/${id}`),
  create: (data) => API.post('/experiences', data),
  update: (id, data) => API.put(`/experiences/${id}`, data),
  delete: (id) => API.delete(`/experiences/${id}`)
};

// Contact
export const contactAPI = {
  getAll: () => API.get('/contact'),
  create: (data) => API.post('/contact', data),
  updateStatus: (id, data) => API.put(`/contact/${id}`, data),
  delete: (id) => API.delete(`/contact/${id}`)
};

export default API;
