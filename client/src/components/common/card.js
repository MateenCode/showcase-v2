import React from "react";
import { edit, trash, github, external } from "assets";
import { trackWindowScroll } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";

function card(props) {
  return (
    <div className='card animated slow jackInTheBox'>
      <div className='card__header'>
        <h1 className='card__header1'>{props.title}</h1>
        {props.admin.admin && (
          <img className='card__icon' src={edit} alt={props.title} />
        )}
      </div>
      <div className='card__body'>
        <a href={props.live} target='_blank' rel='noopener noreferrer'>
          <img
            className='card__image'
            src={props.image}
            alt={props.title}
            effect='opacity'
          />
        </a>
        <p className='card__desc'>{props.desc}</p>
      </div>
      <div className='card__footer'>
        <div className='card__group1'>
          {props.admin.admin && (
            <img
              onClick={props.delete}
              className='card__icon'
              src={trash}
              alt={props.title}
            />
          )}
        </div>
        <div className='card__group2'>
          <a href={props.github} target='_blank' rel='noopener noreferrer'>
            <img className='card__icon' src={github} alt={props.title} />
          </a>
          <a href={props.live} target='_blank' rel='noopener noreferrer'>
            <img className='card__icon' src={external} alt={props.title} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default trackWindowScroll(card);
