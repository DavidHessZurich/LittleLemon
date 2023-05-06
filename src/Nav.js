import React from "react";
import { NavLink } from 'react-router-dom'
import { ReactComponent as Logo } from './Logo.svg';
import './Nav.scss';

const useOutsideClick = (callback) => {
  const ref = React.useRef();
  React.useEffect(() => {
    const handleClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [ref, callback]);

  return ref;
};

function Nav({children}) {
  const [state, setState] = React.useState("hidden");
  const handleClickOutside = () => {
    setState("hidden");
  };
  const ref = useOutsideClick(handleClickOutside);
  const handleClick = () => {
    setState((state) => state === "hidden" ? "" : "hidden");
  };
  return (
  <nav className="navbar">
    <div className="navbar-container">
      <div className="nav-elements">
      <button ref={ref} onClick={handleClick} className="dropbtn"></button>
        <ul className={state}>
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
        </ul>
      </div>
      <div className="logo">
        <Logo height="30"/>
      </div>
    </div>
  </nav>
  );
}

export default Nav;
