import React from 'react';
import ReactDOM from 'react-dom/client';

import '@/styles/index.css';

import { NextUIProvider } from '@nextui-org/system';
import App from './App.tsx';

ReactDOM.createRoot(document.body).render(
  <React.StrictMode>
    <NextUIProvider id='root'>
      <App />
    </NextUIProvider>
  </React.StrictMode>
);
