import React from "react";
import star from "../images/Star.png";

export default function Card(props) {
    let badgetext
    if (props.item.openspots===0 )
        {badgetext="SOLDOUT"}
    else if (props.item.location==="Online")
        {badgetext="ONLINE"}
    return(
        <div className="card">
            {badgetext && <div className="card-badge">{badgetext}</div>}
            <img src={props.item.coverImg} alt={props.item.id} className="carditem"></img>
            <div className="card-stats">
            <img src={star} alt="card rating" className="star-rating"></img>
            <span>{props.item.stats.rating}</span>
            <span className="gray">({props.item.stats.reviewCount})</span>
            <span className="gray"> {props.item.location} </span>
            </div>
            <p>{props.item.title}</p>
            <p><span className="bold">From ${props.item.price}</span> / person</p>
        </div>
    )
}