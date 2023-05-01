import React from "react";
import { ReactComponent as Logo } from './Logo.svg';
import './Footer.scss';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="container">
        <div className="logo">
          <Logo />
        </div>
        <div className="copyright">
          {`Copyright © LittleLemon ${year}`}
        </div>
    </div>
  </footer>
  );
}

export default Footer;
