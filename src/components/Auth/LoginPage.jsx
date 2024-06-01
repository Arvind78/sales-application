import React, { useEffect, useState } from 'react';
import validateLogin from '../../utils/loginValidation';
import styles from '../Styles/LoginPage.module.css';
import { ToastContainer, toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hook/useAuth';

/**
 *  🔒 LoginPage Component 🌟
 * Handles user login with form validation.
 *
 * Features:
 * - Validates user input before submission.
 * - Displays toast notifications for errors or success.
 */

const LoginPage = () => {
  const { user, setAuth, updateAuth } = useAuth();
  const Navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    setAuth();
    e.preventDefault();
    if (!validateLogin(loginData)) {
      return false;
    }
    if (
      loginData.email === user.email &&
      loginData.password == user.password
    ) {
      toast.success('User login sucessfully !', { theme: 'colored' });
      updateAuth();
      Navigate('/');
    } else {
      toast.error('Invalid username or password!', {
        theme: 'colored',
      });
    }
  };

  return (
    <div className={styles.loginContainer}>
      <ToastContainer />
      <div className={styles.formContainer}>
        <h2 className={styles.loginHeading}>
          <span className={styles.logo}>S</span> Login
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="email"
            placeholder="Enter your email"
            value={loginData.email}
            onChange={handleChange}
            className={styles.inputField}
          />
          <input
            type="text"
            name="password"
            placeholder="Enter your password"
            value={loginData.password}
            onChange={handleChange}
            className={styles.inputField}
          />
          <span className={styles.forgotPassword}>
            Forgot Password?
          </span>
          <button type="submit" className={styles.loginButton}>
            Login
          </button>
          <span className={styles.signupPrompt}>
            Don't have an account?{' '}
            <Link to="#" className={styles.signupLink}>
              Signup
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
