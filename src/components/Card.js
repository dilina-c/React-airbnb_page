import React from "react";
import star from "../images/Star.png";

export default function Card(props) {
    let badgetext
    if (props.openspots===0 )
        {badgetext="SOLDOUT"}
    else if (props.location==="Online")
        {badgetext="ONLINE"}
    return(
        <div className="card">
            {badgetext && <div className="card-badge">{badgetext}</div>}
            <img src={props.coverImg} alt={props.id} className="carditem"></img>
            <div className="card-stats">
            <img src={star} alt="card rating" className="star-rating"></img>
            <span>{props.stats.rating}</span>
            <span className="gray">({props.stats.reviewCount})</span>
            <span className="gray"> {props.location} </span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}
