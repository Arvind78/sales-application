// 🔒 Login Validation Utility ✅
// This module provides a function to validate login data. It checks if the email and password fields are correctly filled and meet the required criteria. If there are any errors, it shows a toast notification using react-toastify.

import { toast } from 'react-toastify';

const validateLogin = (loginData) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (loginData.email === '' || loginData.email === null) {
    toast.error('Email is required', {
      position: 'top-right',
      theme: 'colored',
    });
    return false;
  } else if (!emailRegex.test(loginData.email)) {
    toast.error('Invalid email', {
      position: 'top-right',
      theme: 'colored',
    });
    return false;
  } else if (
    loginData.password === '' ||
    loginData.password === null
  ) {
    toast.error('Password is required', {
      position: 'top-right',
      theme: 'colored',
    });
    return false;
  } else if (
    loginData.password.length < 8 ||
    loginData.password.length > 15
  ) {
    toast.error('Password must be 8 to 15 characters', {
      position: 'top-right',
      theme: 'colored',
    });
    return false;
  } else {
    return true;
  }
};

export default validateLogin;
