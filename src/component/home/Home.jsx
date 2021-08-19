import React, { Fragment } from 'react';
import '../../style/main.scss';
import Typewriter from 'typewriter-effect';

class Home extends React.Component{
    render(){
        return(
            <div className="hero">
                <Typewriter className="hero_caption"
                onInit={(typewriter) =>{
                    typewriter
                    .typeString("Hi There!")
                    .pauseFor(1000)
                    .start()
                }}/>
                {/* <div className="hero_sosmed">
                    <span>a</span>
                    <span>a</span>
                    <span>a</span>
                    <span>a</span>
                    <span>a</span>
                </div> */}
          </div>
        )
    }
}

export default Home;