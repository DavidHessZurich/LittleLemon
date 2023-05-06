import React from "react";
import './Reservation.scss';
import { useNavigate } from "react-router-dom";
function Reservation() {
  const navigate = useNavigate();
  return (
    <>
      <div className="reservation-container">
        <div className="reservation-title"><h2>RESERVE A TABLE</h2></div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
      </div>
      <div>
      {function linkButton() {
            return (
              <button className="reservation-proceed" onClick={() => navigate("/reservations/success")}>
                Confirm booking
              </button>
            );
          }()}
      </div>
    </>
  );
}

export default Reservation;
