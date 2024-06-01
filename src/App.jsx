import React, { Suspense, useEffect, lazy } from 'react';
import Theme from './components/Theme/Theme';
import { Route, Routes, useNavigate } from 'react-router-dom';
import useAuth from './hook/useAuth';
const Home = lazy(() => import('./components/Pages/HomePage'));
const Login = lazy(() => import('./components/Auth/LoginPage'));

const App = () => {
  const { user, updateAuth } = useAuth();
  const navigate = useNavigate();
  

  return (
    <div>
      <Theme />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<div>loading...</div>}>
              <Home />
            </Suspense>
          }
        />

        <Route
          path="/login"
          element={
            <Suspense fallback={<div>loading...</div>}>
              <Login />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
