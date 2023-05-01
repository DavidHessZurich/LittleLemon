import React from 'react'
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import Nav from './Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Reservation from './Reservation';
import Home from './Home';

function App() {
  return (
    <>
    <BrowserRouter>
      <Header>
          <Nav/>
      </Header>
      <Main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<Home />} />
          <Route exact path="/menu" element={<Home />} />
          <Route exact path="/reservations" element={<Reservation />} />
          <Route exact path="/order" element={<Home />} />
          <Route exact path="/login" element={<Home />} />
        </Routes>
      </Main>
      <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
