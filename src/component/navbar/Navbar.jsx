
import React,{Fragment} from 'react';
import '../../style/main.scss'
import {Component} from 'react';
import {Link} from 'react-router-dom';
// import toggle from '../../img/circle.png'

const Page = (props) => {
    return(
        <li> <Link to={props.to} className="navbar_menu_list"> {props.page} </Link> </li>
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

                <div class="navbar_toggle">
                    <input type="checkbox" className="navbar_toggle_input"/>
                </div>

                <nav className="navbar_menu">
                    <Page page="Home" to="/"/>
                    <Page page="About" to="/about"/>
                    <Page page="Portofolio" to="/portofolio"/>
                    <Page page="Note" to="/note"/>
                </nav>
            </nav>

            <div class="container d-flex flex-column flex-1 align-items-center justify-content-center">
            <div className="tabbar">
                <ul>
                <li>
                    <a onclick="addClass(0)" href="#" class="d-flex justify-content-center align-items-center link isActive">
                    <i class="material-icons-outlined">home</i>
                    <span>home</span>
                    </a>
                </li>
                <li>
                    <a onclick="addClass(1)" href="#" class="d-flex justify-content-center align-items-center link">
                    <i class="material-icons-outlined">search</i>
                    <span>search</span>
                    </a>
                </li>
                <li>
                    <a onclick="addClass(2)" href="#" class="d-flex justify-content-center align-items-center link">
                    <i class="material-icons-outlined">notifications</i>
                    <span>notifications</span>
                    </a>
                </li>
                <li>
                    <a onclick="addClass(3)" href="#" class="d-flex justify-content-center align-items-center link">
                    <i class="material-icons-outlined">settings</i>
                    <span>settings</span>
                    </a>
                </li>
                </ul>
            </div>
            </div>
            </Fragment>

    )
}}

