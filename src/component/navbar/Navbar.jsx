
import React,{Fragment} from 'react';
import '../../style/main.scss'
import {Component} from 'react';
// import logo from '../../img/logo.png'

export default class Navbar extends Component {
    render(){
        return(
            <Fragment>
                <nav>
                    <ul className="nav_menu">
                        <li className="nav_menu_list"> Me </li>
                        <li className="nav_menu_list"> Work </li>
                        <li className="nav_menu_list"> Blog </li>
                        <li className="nav_menu_list"> Ask </li>
                    </ul>
                </nav>
            </Fragment>
    )
}}

