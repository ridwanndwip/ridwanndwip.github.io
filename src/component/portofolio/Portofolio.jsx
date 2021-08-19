import React, { Fragment } from 'react';
import '../../style/main.scss'
import img from '../../img/example.png'

class Portofolio extends React.Component{
    render(){
        return(
            <Fragment>
            <span className="caption"> Portofolio</span>
            <div className="portofolio">
                <div className="container">
                    <div className="container_img">
                        <img src={img} alt="Image" />
                    </div>
                    <div className="container_info">
                        <h3 className="container_info_caption"> Portofolio 1 </h3>
                        <div className="container_info_desc">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti repellat iure, ratione ipsa odio quisquam unde laborum id dolorum aperiam.</p>
                        </div>
                        <div className="container_info_detail">
                            <span>123</span>
                            <span>123</span>
                            <span>123</span>
                        </div>
                        <div className="container_info_goto">
                            <span>1</span>
                            <span>2</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="portofolio">
                <div className="container">
                    <div className="container_img">
                        <img src={img} alt="Image" />
                    </div>
                    <div className="container_info">
                        <h3 className="container_info_caption"> Portofolio 1 </h3>
                        <div className="container_info_desc">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti repellat iure, ratione ipsa odio quisquam unde laborum id dolorum aperiam.</p>
                        </div>
                        <div className="container_info_detail">
                            <span>123</span>
                            <span>123</span>
                            <span>123</span>
                        </div>
                        <div className="container_info_goto">
                            <span>1</span>
                            <span>2</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="portofolio">
                <div className="container">
                    <div className="container_img">
                        <img src={img} alt="Image" />
                    </div>
                    <div className="container_info">
                        <h3 className="container_info_caption"> Portofolio 1 </h3>
                        <div className="container_info_desc">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti repellat iure, ratione ipsa odio quisquam unde laborum id dolorum aperiam.</p>
                        </div>
                        <div className="container_info_detail">
                            <span>123</span>
                            <span>123</span>
                            <span>123</span>
                        </div>
                        <div className="container_info_goto">
                            <span>1</span>
                            <span>2</span>
                        </div>
                    </div>
                </div>
            </div>
            </Fragment>
        )
    }
}

export default Portofolio;