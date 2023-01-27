import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import Home from './pages/home';
import Conta from './pages/conta';
import ContaInfo from './pages/contaInfo';
import { ChakraProvider } from '@chakra-ui/react';
import { Layout } from './components/layout/layout';
import { AppContextProvider } from './components/appContext/appContext';





function App() {
  return (
    <BrowserRouter>
      <AppContextProvider>
      <ChakraProvider>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/conta/:id' element={<Conta />} />
            <Route path='/info' element={<ContaInfo />}/>
          </Routes>
        </Layout>
      </ChakraProvider>
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
