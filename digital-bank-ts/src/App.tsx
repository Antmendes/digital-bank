import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Card } from './components/card/card';
import { Header } from './components/header/header';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import Home from './pages/home';
import Conta from './pages/conta';
import ContaInfo from './pages/contaInfo';
import { ChakraProvider } from '@chakra-ui/react';
import { Layout } from './components/layout/layout';


function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/conta/:id' element={<Conta />} />
            <Route path='/info' element={<ContaInfo />}/>
          </Routes>
        </Layout>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
