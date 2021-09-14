import React,{useEffect} from 'react';
import '../../style/main.scss'
import me from './../../img/me2.png'
import aos from 'aos'
import 'aos/dist/aos.css'

export default function Me(){
        useEffect(() =>{
            aos.init({duration:1000});
        }, []);
        return(
            <div className="container_me" id="me" data-aos="zoom-in">

            <div class="title">
                <h2 className="title_number"> 01 </h2>
                <h4 className="title_name"> Me </h4>
            </div>

            <div className="about">
                <div className="Ame">
                    <div className="me_title">
                        <h5>About</h5>
                    </div>
                    <div className="me">
                        <img src={me} alt="Me"/>
                        <div className="me_desc">
                        <h4> Hi There,</h4>
                        <p>My name is Ridwan im a newbie front end developer from Indonesia &#127773; I describe myself as a front end developer because I love coding and web design.
                        The main areas of my expertise are HTML5, CSS3, And Javascript, but I have intermediate knowledge of JS library like a ReactJS and VueJS.&#128542;
                        In between mywork, I want to create to open source projects, that helps me to learn a ton of new stuff. And I will writing at my blog about coding tutorial or anything else.
                        I hope you enjoy and thank you for visiting.&#129505;</p>
                        </div>
                    </div>
                </div>
                <div className="container_history">
                    <div className="Ahistory">
                        <div className="history_title">
                            <h5> A History </h5>
                        </div>
                        <div className="history">
                            history
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
