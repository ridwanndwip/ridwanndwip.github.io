import {Component,Fragment} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Service.scss'

import reactjs from '../../Assets/img/reactjs.png'
import frontenddev from '../../Assets/img/frontenddev.png'
import rwd from '../../Assets/img/rwd.png'


const CardService = (props) => {
    return(
      <div className='CardService Slide-up'>
      <div className="CardService__title">
        <img src={props.img} alt="" className="CardService__img"/>
        <span className="CardService__capt">{props.desc}</span>
      </div>
        <div className='Overlay'>
            <h2 class='Overlay__title'>{props.title}</h2>
            <p class='Overlay__content'> {props.desc2}
            </p>   
        </div>
      </div>
    )
  }
  
  export default class Service extends Component {
      render() {
        var settings = {
          dots: true,
          infinite: false,
          arrows: false,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 4,
          initialSlide: 0,
          responsive: [
            {
              breakpoint: 1600,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 1252,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 830,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        };
        return (
          <Fragment>
          <div className="bgservice" id="service">
            <h1 data-aos="zoom-in-up"> My Service </h1>
            <h5 data-aos="zoom-in-up"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis excepturi repellendus tempora, ducimus est soluta.</h5>
          </div>
          <div className="Service" data-aos="zoom-in-up">
            <Slider {...settings}>
              <div>
                <CardService img={reactjs} desc="ReactJs Development" title="ReactJs Development" desc2="Develop responsive web designs using reacjs as a framework"/>
              </div>
              <div>
                <CardService img={rwd} desc="Responsive Web Design" title="Responsive Web Design" desc2="Develop responsive web design. Compatible with Desktops, Tablets, Phones and Devices"/>
              </div>
              <div>
                <CardService img={frontenddev} desc="Frontt End Development" title="Front End Development" desc2="develop projects using html, css, and javascipt frameworks such as SASS, Bootstrap4, Tailwindcss, and Vanilla Js."/>
              </div>
            </Slider>
          </div>
          </Fragment>
        );
      }
    }