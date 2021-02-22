import React from 'react';
import AppRouter from './routes/AppRouter';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from '@mindlab-vojo/component-library';

import 'react-toastify/dist/ReactToastify.css';

import LoaderProvider from './contexts/LoaderContext';
import AuthProvider from './contexts/AuthContext';
import ModalProvider from './contexts/ModalContext';

import Loader from './components/layouts/Loader';

function App() {
  return (
    <ThemeProvider>
      <LoaderProvider>
        <AuthProvider>
          <ModalProvider>
            <AppRouter />
            <ToastContainer />
            <Loader className="light" />
          </ModalProvider>
        </AuthProvider>
      </LoaderProvider>
    </ThemeProvider>
  );
}

export default App;
