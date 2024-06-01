// 🎣 useAuth Hook: Manages user authentication with localStorage integration
// This hook provides functionality to manage user authentication state,
// including storing and updating authentication details in localStorage.
// It also offers a logout function to clear authentication data.

import { useEffect, useState } from 'react';

const useAuth = () => {
  const [user, setUser] = useState('');
  const [userAuth, setUserAuth] = useState({
    email: 'demo@gmail.com',
    password: '12345678',
    isLogin: false,
  });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('auth'));
    if (user) setUser(user);
  }, []);

  const setAuth = () => {
    return localStorage.setItem('auth', JSON.stringify(userAuth));
  };

  const updateAuth = () => {
    const currentAuth = JSON.parse(localStorage.getItem('auth'));
    const newAuth = { ...currentAuth, isLogin: true };
    return localStorage.setItem('auth', JSON.stringify(newAuth));
  };

  const logout = () => {
    localStorage.removeItem('auth');
    return setUser(null);
  };

  return { user, setAuth, updateAuth, logout };
};

export default useAuth;
