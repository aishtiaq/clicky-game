import React from "react";
import "./index.css";

function Header(props) {
  return (
    <header>
     <ul>
       <li>
        <strong>Clicky Game!</strong>
       </li>
       <li>
        <p>{props.children}</p> 
       </li>
       <li>
        Score: {props.score} | Top Score: {props.topScore}
       </li>
          
     </ul>
      
    </header>
  );
}

export default Header;
