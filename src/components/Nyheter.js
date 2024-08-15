import React from "react";
import { Link } from "react-router-dom";
import "./Nyheter.css";

function Nyheter(props) {
  return (
    <>
      <div className="cards_item">
        <Link className="cards__item__link" to={props.path}>
          <h5 className="cards__item__text__nyheter"> {props.text}</h5>
          {/* <figure className="cards__item__pic-wrap" data-category={props.label}> */}

            {/* <img
            //   src={props.src}
            //   alt="Travel Image"
            //   className="cards__item__img"
            /> */}
          {/* </figure> */}
          
        </Link>
      </div>
    </>
  );
}

export default Nyheter;