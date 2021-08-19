
import React,{Fragment} from 'react';
import '../../style/main.scss'
import {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';
import profile from '../../img/profile.png'

export default class Navbar extends Component {
    render(){
        return(
            <Fragment>
            <nav className="navbar">

                <div className="logo">
                    <h6>logo</h6>
                </div>

                <ul className="navbar_menu">
                    <li> <NavLink to="/" exact className="navbar_menu_list" activeClassName="active"> Home </NavLink> </li>
                    <li> <NavLink to="/about" className="navbar_menu_list" activeClassName="active"> About </NavLink> </li>
                    <li> <NavLink to="/portofolio" className="navbar_menu_list" activeClassName="active"> Portofolio </NavLink> </li>
                    <li> <NavLink to="/note" className="navbar_menu_list" activeClassName="active"> Note </NavLink> </li>
                    <li> <a href="facebook.com" className="navbar_menu_link"> Get MyCV</a> </li>
                </ul>
            </nav>


            <div className="mnavbar">
                <nav className="mnavbar_menu">
                    <NavLink className="mnavbar_menu_list home" to="/" activeClassName="mactive" exact>
                        <svg height="18" viewBox="0 -60 512 580" width="18pt" xmlns="http://www.w3.org/2000/svg" ><path transform-origin="center" transform-box="fill-box" d="m498.195312 222.695312c-.011718-.011718-.023437-.023437-.035156-.035156l-208.855468-208.847656c-8.902344-8.90625-20.738282-13.8125-33.328126-13.8125-12.589843 0-24.425781 4.902344-33.332031 13.808594l-208.746093 208.742187c-.070313.070313-.140626.144531-.210938.214844-18.28125 18.386719-18.25 48.21875.089844 66.558594 8.378906 8.382812 19.445312 13.238281 31.277344 13.746093.480468.046876.964843.070313 1.453124.070313h8.324219v153.699219c0 30.414062 24.746094 55.160156 55.167969 55.160156h81.710938c8.28125 0 15-6.714844 15-15v-120.5c0-13.878906 11.289062-25.167969 25.167968-25.167969h48.195313c13.878906 0 25.167969 11.289063 25.167969 25.167969v120.5c0 8.285156 6.714843 15 15 15h81.710937c30.421875 0 55.167969-24.746094 55.167969-55.160156v-153.699219h7.71875c12.585937 0 24.421875-4.902344 33.332031-13.808594 18.359375-18.371093 18.367187-48.253906.023437-66.636719zm0 0"/></svg>
                        <span> Home </span>
                    </NavLink>
                    <NavLink className="mnavbar_menu_list icon document" to="/portofolio" activeClassName="mactive">
                        <svg id="Layer_1" enable-background="new 0 0 512 512" height="18" viewBox="0 0 512 512" width="18" xmlns="http://www.w3.org/2000/svg"><path transform-origin="center" transform-box="fill-box" d="m461.82 145.503h-411.64c-27.67 0-50.18 22.557-50.18 50.289v88.333c0 6.898 4.69 12.905 11.37 14.577l185.75 46.354v-42.64c0-16.589 13.43-30.035 30-30.035h57.76c16.57 0 30 13.446 30 30.035v42.64l185.75-46.354c6.68-1.672 11.37-7.679 11.37-14.577v-88.333c0-27.732-22.51-50.289-50.18-50.289z"/><path d="m314.88 386.124c0 9.851-4.83 19.072-12.91 24.679l-28.88 20.053c-5.14 3.564-11.11 5.346-17.09 5.346s-11.95-1.782-17.09-5.346l-28.88-20.053c-8.08-5.606-12.91-14.827-12.91-24.679v-10.122l-177.12-44.202v129.921c0 27.723 22.51 50.279 50.18 50.279h371.64c27.67 0 50.18-22.556 50.18-50.279v-129.921l-177.12 44.201z"/><path d="m284.877 386.123v-83.708h-57.754v83.708l28.877 20.048z"/><path d="m189.088 102.292c0-14.667-8.688-27.338-21.177-33.118 2.1-21.932 20.578-39.139 42.989-39.139h97.408c22.411 0 40.889 17.207 42.989 39.139-12.49 5.78-21.178 18.451-21.178 33.118v12.175h72.755v-12.175c0-14.794-8.839-27.558-21.503-33.267-2.239-38.44-34.154-69.025-73.063-69.025h-97.408c-38.909 0-70.824 30.585-73.063 69.025-12.664 5.709-21.504 18.473-21.504 33.267v12.175h72.755z"/></svg>
                        <span> Work </span>
                    </NavLink>
                    <NavLink className="mnavbar_menu_list icon document" to="/note" activeClassName="mactive">
                        <svg id="Capa_1" enable-background="new 0 0 512 512" height="18" viewBox="0 0 512 512" width="18" xmlns="http://www.w3.org/2000/svg"><g><g><path transform-origin="center" transform-box="fill-box" d="m.228 366.926c-.69 3.917.203 7.949 2.485 11.208 2.281 3.259 5.765 5.478 9.683 6.168l66.577 11.739-41.939-237.852z"/><g><path d="m80.199.242c-3.927-.713-7.979.167-11.256 2.447-3.276 2.281-5.509 5.774-6.202 9.706l-15.908 90.22 302.673-53.37z"/></g></g><path d="m511.773 431.882-62.514-354.531c-1.438-8.158-9.215-13.602-17.377-12.167l-354.53 62.513c-8.158 1.438-13.606 9.218-12.168 17.376l62.513 354.531c.691 3.918 2.91 7.401 6.169 9.683 2.539 1.778 5.546 2.713 8.604 2.713.867 0 1.739-.075 2.604-.228l354.531-62.513c3.918-.69 7.401-2.91 9.683-6.168 2.282-3.259 3.175-7.291 2.485-11.209zm-366.663-179.05c-1.438-8.158 4.01-15.938 12.168-17.376l236.355-41.676c8.165-1.438 15.939 4.009 17.377 12.167s-4.01 15.938-12.168 17.376l-236.355 41.677c-.881.155-1.758.23-2.622.23-7.143 0-13.472-5.12-14.755-12.398zm195.784 102.561-157.569 27.784c-.881.155-1.758.23-2.622.23-7.143 0-13.472-5.12-14.755-12.398-1.438-8.158 4.01-15.938 12.168-17.376l157.569-27.784c8.164-1.439 15.938 4.009 17.377 12.167 1.438 8.158-4.01 15.938-12.168 17.377zm68.366-72.981-236.355 41.676c-.881.155-1.758.23-2.622.23-7.143 0-13.472-5.12-14.755-12.398-1.438-8.158 4.01-15.938 12.168-17.376l236.355-41.676c8.164-1.438 15.938 4.009 17.377 12.167 1.438 8.159-4.01 15.939-12.168 17.377z"/></g></svg>
                        <span> Blog </span>
                    </NavLink>
                    <NavLink className="mnavbar_menu_list icon document" to="/about" activeClassName="mactive">
                    <img src={profile} alt="Profile" />
                    <span> About Me </span>
                    </NavLink>
                </nav>
            </div>
            </Fragment>

    )
}}

