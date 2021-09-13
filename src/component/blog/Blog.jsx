import React from 'react';
import '../../style/main.scss'

class Blog extends React.Component{
    render(){
        return(
        <div className="container_blog">
            
            {/* Title */}
            <div class="title">
                <h2 className="title_number"> 03 </h2>
                <h4 className="title_name"> Blog </h4>
            </div>

            {/* Blog */}
            <div className="blog">
                <ul class="timeline_blog">
                    <li class="blog_item">
                        <div class="timeline-info">
                            <span>March 12, 2016</span>
                        </div>
                        <div class="timeline-marker"></div>
                        <div class="timeline-content">
                            <p class="timeline-title">Lorem ipsum dolor sit amet ctur adipisicing elit. Officiis, voluptatem.</p>
                            <a href="#"> Lihat selengkapnya </a>
                        </div>
                    </li>
                    <li class="blog_item">
                        <div class="timeline-info">
                            <span>March 12, 2016</span>
                        </div>
                        <div class="timeline-marker"></div>
                        <div class="timeline-content">
                            <p class="timeline-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, voluptatem.</p>
                            <a href="#"> Lihat selengkapnya </a>
                        </div>
                    </li>
                    <li class="blog_item">
                        <div class="timeline-info">
                            <span>March 12, 2016</span>
                        </div>
                        <div class="timeline-marker"></div>
                        <div class="timeline-content">
                            <p class="timeline-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, voluptatem.</p>
                            <a href="#"> Lihat selengkapnya </a>
                        </div>
                    </li>
                    <li class="blog_item">
                        <div class="timeline-info">
                            <span>March 12, 2016</span>
                        </div>
                        <div class="timeline-marker"></div>
                        <div class="timeline-content">
                            <p class="timeline-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, voluptatem.</p>
                            <a href="#"> Lihat selengkapnya </a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        )
    }
}

export default Blog;