import React from 'react';
import '../../style/main.scss';
import Typewriter from 'typewriter-effect';

class Home extends React.Component{
    render(){
        return(
            <div className="hero" style={{ backgroundImage: "url(./img/bg7-min.png)" }}>
                <div className="bg"></div>
                <Typewriter className="hero_caption"
                onInit={(typewriter) =>{
                    typewriter
                    .typeString("Hi There!")
                    .pauseFor(1000)
                    .start()
                }}
                />
          </div>
        )
    }
}

export default Home;