import React from 'react'
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import Nav from './Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Reservation from './Reservation';
import Home from './Home';
import Menu from './Menu';
import About from './About';
import ReservationSuccessful from './ReservationSuccessful';

function App() {
  return (
    <>
    <BrowserRouter>
      <Header>
          <Nav/>
      </Header>
      <Main>
        <Routes>
          <Route exact path="/" element={<Home name="This weeks specials"/>} />
          <Route exact path="/about" element={<About name="Welcome to Little Lemon"/>} />
          <Route exact path="/menu" element={<Menu name="MENU"/>} />
          <Route exact path="/reservations" element={<Reservation />} />
          <Route exact path="/reservations/success" element={<ReservationSuccessful />} />
        </Routes>
      </Main>
      <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
