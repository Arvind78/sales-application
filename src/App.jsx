import React, { Suspense, useEffect, lazy } from 'react';
import Theme from './components/Theme/Theme';
import { Route, Routes, useNavigate } from 'react-router-dom';
import useAuth from './hook/useAuth';
import Loading from './components/Loader/Loading';
import NotFoundPage from './components/Pages/NotFoundPage';
const Home = lazy(() => import('./components/Pages/HomePage'));
const Login = lazy(() => import('./components/Auth/LoginPage'));

/**
 * 🌐 App Component
 *
 * The main application component that sets up the routing and theme for the application.
 * It handles user authentication by checking local storage for user login status and
 * navigates accordingly.
 *
 * Key Features:
 * - Suspense with Lazy Loading: Dynamically imports Home and Login pages.
 * - Theme Integration: Applies the theme using the Theme component.
 * - Authentication: Redirects users based on their login status.
 *
 * Components:
 * - Theme: Applies the theme settings.
 * - Loading: Displays a loading spinner while pages are being lazily loaded.
 * - Home: The homepage component, lazily loaded.
 * - Login: The login page component, lazily loaded.
 */

const App = () => {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem('auth'));

  useEffect(() => {
    
    if (user && user.isLogin) {
      navigate('/');
    } else {
      navigate('/login');
    }
  }, []);

  return (
    <div>
      <Theme />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loading/>}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/login"
          element={
            <Suspense fallback={<Loading/>}>
              <Login />
            </Suspense>
          }
        />
        
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
    </div>
  );
};

export default App;
