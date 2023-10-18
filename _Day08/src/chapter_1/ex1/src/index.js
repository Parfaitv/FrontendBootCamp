import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from './provider/ThemeProvider';
import './index.css'
import { Layout } from './layout/Layout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider>
    <Layout>
      <App />
    </Layout>
  </ThemeProvider>
);
