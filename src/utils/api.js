import axios from 'axios';

// 🔐 Function to authenticate user login
export const userLogin = async (data) => {
  const response = await axios.post(
    'http://localhost:8080/user/login',
    data
  );
  return response.data;
};
