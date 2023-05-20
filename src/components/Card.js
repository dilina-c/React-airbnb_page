import React from "react";
import star from "../images/Star.png";

export default function Card(props) {
    console.log(props);
    return(
        <div className="card">
            <img src={props.img} alt="carditem" className="carditem"></img>
            <div className="card-stats">
            <img src={star} alt="card rating" className="star-rating"></img>
            <span>{props.rating}</span>
            <span className="gray">({props.reviewCount})</span>
            <span className="gray"> {props.country} </span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}