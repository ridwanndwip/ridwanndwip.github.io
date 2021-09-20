import React,{useEffect} from 'react';
import '../../style/main.scss'
import me from './../../img/me.jpg'
import aos from 'aos'
import 'aos/dist/aos.css'
import Title from '../title/Title'

export default function Me(){
        useEffect(() =>{
            aos.init({duration:1000});
        }, []);
        return(
            <div className="container_me" id="me" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            
            <Title number="01" title="Me"/>

            <div className="about">

                <div className="Ame">
                    <div className="me_title">
                        <h5> &#9656; <i>About</i></h5>
                    </div>
                    <div className="me">
                        <img src={me} alt="Me" className="me_pict"/>
                        <div className="me_desc">
                            <span> Hi There,</span>
                            <p>My name is Ridwan I'm a newbie front end developer from Indonesia &#127773; I describe myself as a front end developer since I love coding and web design.
                            The main areas of my expertise are HTML5, CSS3, And Javascript, but I'm intermediate in JS library such a ReactJS and VueJS.&#128542;
                            In between mywork, I would like to create an open source projects it help me to learn a ton of new stuff. And I write anything about coding and any tutorial at my blog.
                            I hope you enjoy and thank you for visiting.&#129505;</p>
                            </div>
                    </div>
                </div>

                <div className="container_history">
                    <div className="Ahistory">
                        <div className="history_title">
                            <h5> &#9656; <i>A History</i> </h5>
                        </div>
                        <div className="history">
                            <div className="history_list">
                                <span> Vocational High School I Depok <br></br> Software Engineering </span>
                                <span> 11 - 14</span>
                            </div>
                            <div className="history_list">
                                <span> Indraprasta PGRI University<br></br> Informatics Engineering </span>
                                <span> 15 - 19</span>
                            </div>
                            <div className="history_list">
                                <span> YPI Tansyitul Muta'allimin <br></br> As Teacher TIK </span>
                                <span> 18 - 19</span>
                            </div>
                            <div className="history_list">
                                <span> Weekend Inc <br></br> As Newsletter Developer </span>
                                <span> 21 - now </span>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            </div>
        )
    }

