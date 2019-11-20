import React from "react";
import { Link } from "react-router-dom";

import { logo, folder, github } from "assets";

export default function Navbar(props) {
  return (
    <nav className='navbar'>
      <Link to={"/"}>
        <div className='navbar__box'>
          <img className='navbar__logo' alt='Logo' src={logo} />
          <p className='navbar__text'>showcase</p>
        </div>
      </Link>
      <div className='navbar__box'>
        {props.admin.admin && (
          <Link to={"/create"}>
            <img className='navbar__icon' alt='create' src={folder} />
          </Link>
        )}

        <Link to={"/about"}>
          <img className='navbar__icon' alt='about' src={github} />
        </Link>
        <a
          href='https://github.com/MateenCode'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img className='navbar__icon' alt='github' src={github} />
        </a>
      </div>
    </nav>
  );
}
