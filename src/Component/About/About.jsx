import './About.scss'
import aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
// import cv from '../../Assets/doc/Cv.pdf'

export default function About() {
    useEffect(() =>{
        aos.init({duration:1500});
    }, []);
    return(
        <div className="about" id="about">
            <span className="about__title" data-aos="fade-down">
                Hi, I'm Ridwan. Nice to meet you
            </span>
            <p className="about__caption" data-aos="fade-up">
            Hi, I am a Front End Developer. I fresh graduate in informatics engineering in 2019 at the Indraprasta PGRI university. I think front end is my passion because I love coding in web design and problem solving. In making web design I often use ReactJs as a javascript framework, because ReactJs is a reusable component, makes me complete projects quickly. I love making open source projects. It helps me learn many new things and add to my portfolio. besides that I also have the ability to work independently and in teams, but still comply with the work rules that have been determined.
            </p>
            <div className="about__getcv">
                <a href="https://drive.google.com/file/d/1KTgAVYZUPnn7ZKkbZtaWQuciUeJ55COc/view" target="_blank"> Get My CV </a>
            </div>
        </div>
    )
}