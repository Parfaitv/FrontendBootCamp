import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from './provider/ThemeProvider';
import './index.css'
import { Layout } from './layout/Layout';
import store from './store/index';
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <ThemeProvider>
      <Layout>
        <App />
      </Layout>
    </ThemeProvider>
  </Provider>
);
