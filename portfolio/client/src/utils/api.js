import axios from 'axios';

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL || '/api',
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
});

// Request interceptor
API.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

// Response interceptor
API.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const message = error.response?.data?.message || error.message || 'Network error';
    return Promise.reject(new Error(message));
  }
);

export const portfolioAPI = {
  getPortfolio: () => API.get('/portfolio'),
  updatePortfolio: (id, data) => API.put(`/portfolio/${id}`, data),
  getStats: () => API.get('/portfolio/stats'),
};

export const sectionAPI = {
  getSections: (portfolioId) => API.get(`/sections/${portfolioId}`),
  getSectionByType: (portfolioId, type) => API.get(`/sections/${portfolioId}/${type}`),
  upsertSection: (data) => API.post('/sections', data),
  deleteSection: (id) => API.delete(`/sections/${id}`),
};

export default API;
