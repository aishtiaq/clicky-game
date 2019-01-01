import React from 'react'
import "./index.css";

export default function Cards(props) {
  return (
    <img
        aria-label="click item"
        className={`card ${props.animate? "animated shake 0.5s": ""}`} 
        src={props.image}
        onClick={() => props.handleClick(props.id)}
        alt="cartoon character"
    /> 
  )
}
