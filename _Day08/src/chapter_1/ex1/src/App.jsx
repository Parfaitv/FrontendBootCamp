import React from 'react'
import AppComponent from './component/AppComponent';
import { ThemeProvider } from './provider/ThemeProvider';
import { Layout } from './layout/Layout';

const App = () => {

  return (
    <ThemeProvider>
      <Layout>
        <AppComponent />
      </Layout>
    </ThemeProvider>
  );
}

export default App