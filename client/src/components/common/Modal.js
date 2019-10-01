import React from "react";
import ReactDOM from "react-dom";

function Modal({ display, header }) {
  return ReactDOM.createPortal(
    <div className='modal' style={{ display: display ? "" : "none" }}>
      <div className='modal__content'>
        <div className='modal__header'>
          <h2>{header}</h2>
          <h2 className='modal__close'>&times;</h2>
        </div>
        <div className='modal__body'>Some text in the Modal..</div>
        <div className='modal__footer '>
          <button className='button modal__btn1'>Add</button>
          <button className='button modal__btn2'>Close</button>
        </div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
}

export default Modal;
