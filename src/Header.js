import React from "react";
import './Header.scss';
import { useNavigate, useLocation } from "react-router-dom";



function Header({children}) {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <header>
      {children}
      {!location.pathname.includes("/reservations") ?
        <div className="header-container">
          <h1>Little Lemon</h1>
          <h2>Chicaco</h2>
          {function linkButton() {
            return (
              <button className="header-reservationButton" onClick={() => navigate("/reservations")}>
                Book a table
              </button>
            );
          }()}
        </div>
        :''
      }
    </header>
  );
}

export default Header;
