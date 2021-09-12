import React from 'react';
import '../../style/main.scss'
import me from './../../img/me.jpg'

class Me extends React.Component{
    render(){
        return(
            <div className="container_me">
            <div class="title">
                <h2 className="title_number"> 01 </h2>
                <h4 className="title_name"> Me </h4>
            </div>
            <div className="about">
                <img src={me} alt="Me"/>
                <d128iv className="about_desc">
                    <h4> Hi There, Iam Ridwan </h4>
                    <p>I fresh graduate in informatics engineering in 2019 at the Indraprasta PGRI university. I think front end is my passion because I love coding in web design and problem solving. In making web design I often use ReactJs as a javascript framework,</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus iste excepturi, voluptatum cumque culpa cupiditate soluta ex blanditiis perspiciatis est.</p>
                    <h5> HTML &#9675; CSS &#9675; JS &#9675; REACTJS &#9675;TAILWIND</h5>
                </d128iv>
            </div>
            </div>
        )
    }
}

export default Me;