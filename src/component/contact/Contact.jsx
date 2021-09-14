import React from 'react';
import '../../style/main.scss'

class Contact extends React.Component{
    render(){
        return(
            <div className="container_contact">
            <div class="title">
                <h2 className="title_number"> 04 </h2>
                <h4 className="title_name"> Ask </h4>
            </div>
            <div className="contact">
                <h2> title Here </h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat non suscipit iusto numquam dignissimos consequatur magni labore rerum alias cumque, neque iste illo incidunt sequi explicabo praesentium dolorem ullam ipsum.</p>
            </div>
            <div className="footer">
                <h4> Design & Built by Ridwanganteng</h4>
                <h6> Live to learn and leveling up 🍁</h6>
            </div>
            </div>
        )
    }
}

export default Contact;