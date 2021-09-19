import React from 'react';
import '../../style/main.scss'
import Title from '../title/Title'

const Titem = () => {
    return(
        <li className="timeline-item">
                            <div className="timeline-title">
                                <span>Lorem Ipsum Dolor</span>
                            </div>
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <span className="timeline-date">March 23, 2016</span>
                                <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis
                                    eu pede mollis pretium. Pellentesque ut neque.</p>
                                <span className="read_more">
                                <a href="#">
                                Read More
                                </a>
                                </span>
                            </div>
                        </li>
    )
}

class Blog extends React.Component{
    render(){
        return(
        <div className="container_blog" id="blog">
            
            <Title number="03" title="Blog"/>

            {/* Blog */}
            <div className="blog">
                    <ul className="container_timeline">

                        <li className="period">
                            <h6 className="period_text">April 2016</h6>
                        </li>

                        <Titem/>

                        <Titem/>

                        <li className="period">
                                <h2 className="period_text">April 2016</h2>
                        </li>

                        <Titem/>

                        <Titem/>
                        
                    </ul>
                </div>
            </div>
        )
    }
}

export default Blog;