import './Navbar.scss';
import {Component} from 'react';
import {MenuItems} from './Menuitems'
import logo from '../../Assets/img/logo.png'

export default class Navbar extends Component {
    state ={ click : false}

    HandleClick = () =>{
        this.setState({ click : !this.state.click})
    }
render(){
    return(
        <nav className="navbar">
            <span className="navbar__logo">
                <img src={logo} alt="Logo" className="navbar__pict"/>
            </span>
            <div className="navbar__menu" onClick={this.HandleClick}>
                <div className={this.state.click ? 'navbar__hamburger2' : 'navbar__hamburger1'}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <ul className={this.state.click ? 'navbar__items active' : 'navbar__items'}>
                {MenuItems.map((items, index) => {
                    return(
                <li key={index}>
                    <a className={items.ClassName} href={items.url}>
                        {items.title}
                    </a>
                </li>
                    )})}
            </ul>
        </nav>
    )
}}