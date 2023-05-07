import React, { useReducer } from "react";
import { useNavigate, Routes, Route} from "react-router-dom";
import Reservation from './Reservation';
import Home from './Home';
import Menu from './Menu';
import About from './About';
import ReservationSuccessful from './ReservationSuccessful';
import { fetchAPI, submitAPI } from './bookingAPI.js';

export const initializeTimes  = function() {
  return (
    fetchAPI(new Date())
  )
};

export const updateTimes = function(old, date) {
  return (
    fetchAPI(new Date(date))
  )
}



function Main() {
  const navigate = useNavigate();
  const navigateTo = function (destination) {
    navigate(destination);
  }
  const submitReservation =function(initFormVariables, formVariables, setFormVariables) {
    let isSuccessfull = submitAPI(formVariables);
    if (isSuccessfull) {
      setFormVariables(initFormVariables);
      navigate("/reservations/success")
    }
  }
  const [availableTimes, dispatch] = useReducer(updateTimes,initializeTimes());
  return (
    <main>
    <Routes>
      <Route exact path="/" element={<Home name="THIS WEEKS SPECIALS"/>} />
      <Route exact path="/about" element={<About name="WELCOME TO LITTLE LEMON"/>} />
      <Route exact path="/menu" element={<Menu name="MENU"/>} />
      <Route exact path="/reservations" element={<Reservation navigateTo={navigateTo} availableTimes={availableTimes} updateTimes={dispatch} submitReservation={submitReservation}/>} />
      <Route exact path="/reservations/success" element={<ReservationSuccessful />} />
    </Routes>
    </main>
  );
}

export default Main;
