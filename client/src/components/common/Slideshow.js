import React from "react";

import { github, external } from "assets";

function Slideshow(props) {
  return (
    <div className='slideshow animated slow jackInTheBox'>
      <div className='slideshow__header'>
        <h1 className='slideshow__header1'>{props.title}</h1>
      </div>
      <div className='slideshow__body'>
        <a href={props.live} target='_blank' rel='noopener noreferrer'>
          <img
            className='card__image'
            src={props.image}
            alt={props.title}
            effect='opacity'
          />
        </a>
        <p className='slideshow__desc'>{props.desc}</p>
      </div>
      <div className='slideshow__footer'>
        <div className='slideshow__group1'></div>
        <div className='slideshow__group2'>
          <a href={props.github} target='_blank' rel='noopener noreferrer'>
            <img className='slideshow__icon' src={github} alt={props.title} />
          </a>
          <a href={props.live} target='_blank' rel='noopener noreferrer'>
            <img className='slideshow__icon' src={external} alt={props.title} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Slideshow;
