
import React from 'react';
import '../../style/main.scss'
import {Component} from 'react';
import {Link} from 'react-router-dom';
// import toggle from '../../img/circle.png'

export default class Navbar extends Component {
    state ={ click : false}

    HandleClick = () =>{
        this.setState({ click : !this.state.click})
    }

    render(){
        return(
            <nav className="navbar">
                <div className="navbar_darkmode">
                    <h5> Dark Mode </h5>
                </div>

                <nav className="navbar_menu">
                    <li> <Link to="/" className={this.state.click ? 'navbar_list active' : 'navbar_list'}>Home</Link> </li>
                    <li> <Link to="/about" className={this.state.click ? 'navbar_list active' : 'navbar_list'}>About</Link> </li>
                    <li> <Link to="/portofolio" className={this.state.click ? 'navbar_list active' : 'navbar_list'}>Portofolil</Link> </li>
                    <li> <Link to="/note" className={this.state.click ? 'navbar_list active' : 'navbar_list'}>Note</Link> </li>
                </nav>

                <div onClick={this.HandleClick} className={this.state.click ? 'navbar_toggle active' : 'navbar_toggle'}> 
                        <div className={this.state.click ? 'line-menu half startfinal start' : 'line-menu half start'}></div>
                        <div className="line-menu"></div>
                        <div className={this.state.click ? 'line-menu half endfinal end' : 'line-menu half end'}></div>
                </div>
            </nav>
    )
}}

