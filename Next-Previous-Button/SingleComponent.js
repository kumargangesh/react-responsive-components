import React from 'react';
import "./Style.css";

function SingleComponent(props) {
  return (
    <div className="container div">
        <h1>{props.heading}</h1>
    </div>
  )
}

export default SingleComponent;
