/**
 * API Configuration
 *
 * In development, this defaults to http://localhost:5005.
 * In production, it uses the VITE_API_URL environment variable.
 */

export const API_BASE_URL = "https://samyam.onrender.com";

export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: `${API_BASE_URL}/api/v1/auth/login`,
    REGISTER: `${API_BASE_URL}/api/v1/auth/register`,
    FORGOT_PASSWORD: `${API_BASE_URL}/api/v1/auth/forgot-password`,
  },
  DASHBOARD: {
    STATS: `${API_BASE_URL}/api/v1/dashboard/stats`,
    MIGRATE: `${API_BASE_URL}/api/v1/dashboard/migrate`,
  },
  ENQUIRIES: `${API_BASE_URL}/api/v1/enquiries`,
  YATRAS: `${API_BASE_URL}/api/v1/yatras`,
  TEERTHAS: `${API_BASE_URL}/api/v1/teerthas`,
  TESTIMONIALS: `${API_BASE_URL}/api/v1/testimonials`,
  BLOGS: `${API_BASE_URL}/api/v1/blogs`,
  SEED: `${API_BASE_URL}/api/v1/seed`,
};
