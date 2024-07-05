import React from "react";
import './card.css'
 function Card(props){
    return(
    <>
    <div className="card">
        <img src={props.image} alt="" />
        <h4>{props.title}</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim soluta, excepturi architecto .</p>
    </div>
    </>
    );
 }
export default Card;
