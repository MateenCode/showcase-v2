import React from "react";

export default function Header({ header, sub }) {
  return (
    <header className='header'>
      <hgroup>
        <h1 className='header__title  u-center-text'>{header}</h1>
        <h2 className='header__desc  u-center-text'>{sub}</h2>
      </hgroup>
    </header>
  );
}
