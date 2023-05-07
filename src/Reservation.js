import React, { useEffect, useState } from "react";
import './Reservation.scss';

function Reservation(props) {

  const initFormVariables = {
    date : new Date().toISOString().split("T")[0],
    time : '',
    occasion : '',
    guests : '',
  };

  const [formVariables, setFormVariables] = useState(initFormVariables);

  const handleSubmit = (event) => {
    event.preventDefault();
    props.submitReservation(initFormVariables, formVariables, setFormVariables)
  };

  const handleFormChange = (event, eventType) => {
    event.preventDefault();
    let temp = { ...formVariables };
    switch (eventType) {
      case 'occasion':
        temp.occasion = event.target.value;
        break;
      case 'guests':
        temp.guests = event.target.value;
        break;
      case 'date':
        temp.date = event.target.value;
        props.updateTimes(event.target.value);
        temp.time = "";
        break;
      case 'time':
        temp.time = event.target.value;
        break;
      default:
    }
    setFormVariables(temp)
  };

  const BookingTimes = (props)=>{
    return (
      props.times.map((time) => {return <option>{time}</option>})
    )
  };

  useEffect(() => {
    props.updateTimes(formVariables.date);
  }, [formVariables.date]);

  const [submitButtonStatus, setSubmitButtonStatus] = useState({disabled : ' '});
  useEffect(() => {
    if (formVariables.guests >= 1 && formVariables.date !=='' && formVariables.time !=='' && formVariables.occasion !=='') {
      setSubmitButtonStatus({});
    } else {
      setSubmitButtonStatus({disabled : ' '});
    }
  }, [formVariables]);

  return (
    <>
      <h1>RESERVE A TABLE</h1>
        <form onSubmit={handleSubmit} aria-label="Booking Form">
        <div className="reservation-container">
          <div>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" value={formVariables.date} min={new Date().toISOString().split("T")[0]} max={new Date((new Date()).setDate((new Date()).getDate() + 14)).toISOString().split("T")[0]} onChange={event => handleFormChange(event, 'date')} required={true}/>
          </div>
          <div>
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time " required={true} value={formVariables.time} onChange={event => handleFormChange(event, 'time')}>
                <option value={""} disabled>Choose an option</option>
                <BookingTimes times={props.availableTimes}/>
            </select>
          </div>
          <div>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" value={formVariables.guests} onChange={event => handleFormChange(event, 'guests')} required={true}/>
          </div>
          <div>
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={formVariables.occasion} onChange={event => handleFormChange(event, 'occasion')} required={true}>
                <option value={""} disabled>Choose an option</option>
                <option value= {"birthday"}>Birthday</option>
                <option value = {"anniversary"}>Anniversary</option>
                <option value = {"other"}>Other</option>
            </select>
            </div>
        </div>
          <input type="submit" {...submitButtonStatus} value="Make Your reservation" />
        </form>
    </>
  );
}

export default Reservation;
