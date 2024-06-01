import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { ChakraProvider } from '@chakra-ui/react';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom';

/**
 * 🚀 Main Entry Point
 *
 * This file sets up the main entry point for the React application.
 * It uses ReactDOM to render the root component into the DOM.
 *
 * Key Integrations:
 * - ChakraProvider: For Chakra UI theming and component library
 * - BrowserRouter: For routing within the React application
 * - React.StrictMode: For highlighting potential issues in an application
 */

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
