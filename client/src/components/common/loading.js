import React from "react";

export default function loading() {
  return (
    <div className='loading'>
      <div className='lds-ring'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
