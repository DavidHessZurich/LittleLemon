import React from "react";
import { NavLink } from 'react-router-dom'
import { ReactComponent as Logo } from './Logo.svg';
import './Nav.scss';

function Nav({children}) {
  return (
  <nav className="navbar">
    <div className="container">
      <div className="logo">
        <Logo />
      </div>
      <div className="nav-elements">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/menu">Menu</NavLink>
          </li>
          <li>
            <NavLink to="/reservations">Reservations</NavLink>
          </li>
          <li>
            <NavLink to="/order">Order</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
}

export default Nav;
