import React from "react";
import './ReservationSuccessful.scss';
function ReservationSuccessful(props) {
  return (
    <>
      <h1>YOUR RESERVATION WAS SUCCESSFUL</h1>
      <p>We are looking forward to see you!</p>
      <button className="reservationSuccessful-homeButton" onClick={() => props.navigateTo("/")}>Home</button>
    </>
  );
}

export default ReservationSuccessful;
