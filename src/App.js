import React from 'react'
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import Nav from './Nav';
import { BrowserRouter } from 'react-router-dom'


function App() {
  return (
    <>
    <BrowserRouter>
      <Header>
          <Nav/>
      </Header>
      <Main/>
      <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
