import React from 'react';
import '../../style/main.scss';
import Typewriter from 'typewriter-effect';

class Home extends React.Component{
    render(){
        return(
            <div className="Hero">
                <div className="Hero_desktop">
                    <h1> Personal Portofolio </h1>
                    <div class="icon-scroll">
                        <div class="icon-arrows">
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;