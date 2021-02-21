import React from 'react';
import AppRouter from './routes/AppRouter';

import { ThemeProvider } from '@mindlab-vojo/component-library';

import AuthProvider from './contexts/AuthContext';
import ModalProvider from './contexts/ModalContext';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <ModalProvider>
          <AppRouter />
        </ModalProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
