import React from "react";
import { tool } from "assets";

function Footer() {
  return (
    <footer className='footer'>
      <p className='footer__copyright'>
        © 2019 Mateen Kazia All Right Reserved
      </p>
      <img className='footer__logo' src={tool} alt='logo' />
    </footer>
  );
}

export default Footer;
