
import React,{Fragment} from 'react';
import '../../style/main.scss'
import {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';
import logo from '../../icon.png';
// import toggle from '../../img/circle.png'

const Mobile = (props) => {
    return(
        <Link to={props.link} className="mnavbar_menu_list"> <img src={props.img} alt={props.alt} /> </Link>
    )
} 

export default class Navbar extends Component {
    state ={ click : true}

    HandleClick = () =>{
        this.setState({ click : !this.state.click})
    }
    
    render(){

        return(
            <Fragment>
            <nav className="navbar">

                <div className="navbar_toggle">
                    <input type="checkbox" className="navbar_toggle_input"/>
                </div>

                <ul className="navbar_menu">
                    <li> <NavLink to="/" exact className="navbar_menu_list" activeClassName="active"> Home </NavLink> </li>
                    <li> <NavLink to="/about" className="navbar_menu_list" activeClassName="active"> About </NavLink> </li>
                    <li> <NavLink to="/portofolio" className="navbar_menu_list" activeClassName="active"> Portofolio </NavLink> </li>
                    <li> <NavLink to="/note" className="navbar_menu_list" activeClassName="active"> Note </NavLink> </li>
                </ul>
            </nav>


            <div className="mnavbar">
                <nav className="mnavbar_menu">
                    <Mobile link="/" img={logo} alt="logo"/>
                    <Mobile link="/about" img={logo} alt="logo"/>
                    <Mobile link="/portofolio" img={logo} alt="logo"/>
                    <Mobile link="/note" img={logo} alt="logo"/>
                    <div className="icon document">
                        <svg id="Capa_1" enable-background="new 0 0 512 512" height="200" viewBox="0 0 530 512" width="200" xmlns="http://www.w3.org/2000/svg"><path d="m330 150c-19.299 0-35-15.701-35-35v-115h-179c-30.327 0-55 24.673-55 55v402c0 30.327 24.673 55 55 55h280c30.327 0 55-24.673 55-55v-307zm-187 210h72.72c8.284 0 15 6.716 15 15s-6.716 15-15 15h-72.72c-8.284 0-15-6.716-15-15s6.716-15 15-15zm-15-65c0-8.284 6.716-15 15-15h220c8.284 0 15 6.716 15 15s-6.716 15-15 15h-220c-8.284 0-15-6.716-15-15zm235-95c8.284 0 15 6.716 15 15s-6.716 15-15 15h-220c-8.284 0-15-6.716-15-15s6.716-15 15-15z"/><path d="m325 115c0 2.757 2.243 5 5 5h114.314c-2.744-5.066-6.274-9.719-10.515-13.732l-96.423-91.222c-3.742-3.54-7.91-6.493-12.375-8.825v108.779z"/></svg>
                    </div>
                </nav>
            </div>
            {/* <div className="navbar_n">
            <nav>
                <a className="active" href="#">
                <svg viewBox="0 0 100 100">
                    <g transform="translate(10 5) scale(0.8 0.9)">
                    <path d="M 0 30 v 70 h 100 v -70 l -50 -30 z" stroke="currentColor" strokeWidth="10" fill="none"
                        strokeLinejoin="round" strokeLinecap="round" />
                    </g>
                </svg>
                <span>
                    Home
                </span>
                </a>
            
                <a href="#">
                <svg viewBox="0 0 100 100">
                    <g transform="translate(5 5) scale(0.9 0.9)">
                    <path d="M 50 35 a 20 20 0 0 1 50 0 q 0 25 -50 60 q -50 -35 -50 -60 a 25 25 0 0 1 50 0" stroke="currentColor"
                        strokeWidth="10" fill="none" strokeLinejoin="round" strokeLinecap="round" />
                    </g>
                </svg>
                <span>
                    Likes
                </span>
                </a>
            
                <a href="#">
                <svg viewBox="0 0 100 100">
                    <g transform="translate(5 5) scale(0.9 0.9)">
                    <circle cx="45" cy="38" r="38" stroke="currentColor" strokeWidth="10" fill="none" />
                    <line x1="66" y1="65" x2="100" y2="100" stroke="currentColor" strokeWidth="10" />
                    </g>
                </svg>
                <span>
                    Search
                </span>
                </a>
            
                <a href="#">
                <svg viewBox="0 0 100 100">
                    <g transform="translate(5 5) scale(0.9 0.9)">
                    <circle cx="50" cy="35" r="18" stroke="currentColor" strokeWidth="10" fill="none" />
                    <rect x="15" y="75" width="70" height="50" rx="25" stroke="currentColor" strokeWidth="10" fill="none" />
                    </g>
                </svg>
                <span>
                    Profile
                </span>
                </a>
            </nav>
            </div> */}
            </Fragment>

    )
}}

