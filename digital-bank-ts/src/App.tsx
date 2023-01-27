import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { Layout } from './components/layout/layout';
import { AppContextProvider } from './components/appContext/appContext';
import MainRoutes from './routes';





function App() {
  return (
    <BrowserRouter>
      <AppContextProvider>
      <ChakraProvider>
        <Layout>
          <MainRoutes />
        </Layout>
      </ChakraProvider>
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
