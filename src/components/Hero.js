import React from "react";
import Picturgrp from "../images/PIctureGroup.png";

export default function Hero() {
    return(
        <section className="hero">            
        <img src={Picturgrp} alt="picture-group" className="pic-grp"/>
        <h1 className="header-hero">Online Experiences</h1>
        <p className="paragraph-hero">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
</p>
        </section>
    )
}