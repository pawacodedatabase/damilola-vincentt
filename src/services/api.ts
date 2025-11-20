import axios from 'axios';

// Base URL of your PHP backend (running on XAMPP, assuming it is on localhost)
const API_URL = 'http://localhost/Portfolio/back/auth/';

// Function to handle user sign up
export const signUp = async (userData: FormData) => {
  try {
    const response = await axios.post(`${API_URL}signup.php`, userData, {
      headers: {
        'Content-Type': 'multipart/form-data', // To handle file uploads
      },
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // TypeScript now knows that 'error' is of type 'AxiosError'
      throw error.response?.data || error.message;
    }
    // Handle unknown errors
    throw new Error('An unknown error occurred');
  }
};

// Function to handle user login
export const login = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}login.php`, { email, password });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // TypeScript now knows that 'error' is of type 'AxiosError'
      throw error.response?.data || error.message;
    }
    // Handle unknown errors
    throw new Error('An unknown error occurred');
  }
};
