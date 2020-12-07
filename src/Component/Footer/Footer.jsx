import {Fragment} from 'react'
import './Footer.scss'
import logo from '../../Assets/img/logo.png'

import linkedin from '../../Assets/img/linkedin.png'
import instagram from '../../Assets/img/instagram.png'
import call from '../../Assets/img/call.png'
import github from '../../Assets/img/github.png'
import email from '../../Assets/img/envelope.png'
import reactjs from '../../Assets/img/reactjs.png'

export default function Footer(){
    return(
        <Fragment>
            <div className="titlefoot">
                <span className="titlefoot__span"> Live to learn n leveling up <br/> <span className="titlefoot__span2">Ridwandwip</span></span>
            </div>
            <div className="footer">
                <img src={logo} alt="Logo" className="footer__img"/>
                <div className="footer__sosmed">
                    <a href="https://linktr.ee/ridwanndwip" target="_blank" rel="noreferrer"><img src={call} alt=""/></a>
                    <a href="https://www.instagram.com/ridwanndwip/" target="_blank" rel="noreferrer"><img src={instagram} alt=""/></a>
                    <a href="https://github.com/ridwanndwip" target="_blank" rel="noreferrer"><img src={github} alt=""/></a>
                    <a href="https://www.linkedin.com/in/ridwandwip" target="_blank" rel="noreferrer"><img src={linkedin} alt=""/></a>
                    <a href="rmailto:uus.ridwandwip.rpl2@gmail.com" target="_blank" rel="noreferrer"><img src={email} alt=""/></a>
                </div>
                <div className="footer__copyright">
                    <span> Copyright &copy;2020 </span>
                    <span> Handcrafted by me Ridwandwip </span>
                    <span> Made With <img src={reactjs}/></span>
                </div>
            </div>
        </Fragment>
    )
}