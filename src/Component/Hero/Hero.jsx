import React from 'react';
import './Hero.scss'
import me from '../../Assets/img/me.jpeg'

export default function Hero(){
    return(
    <div className="hero">
        <div className="hero__caption">
            <span className="hero__caption__1">
                Front End Dev
            </span>
            <span className="hero__caption__2"> Html / Css / JS</span>
        </div>
        <img src={me} alt="#" className="hero__pict"/>
        <div className="hero__mouse"></div>
        <p className="hero__text">Scroll</p>
    </div>
    )
}