
import React,{useState} from 'react';
import '../../style/main.scss'
import {Link} from 'react-scroll';

const Url = (props) => {
    return(
        <li className="nav_menu_list"> 
            <Link to={props.to} smooth={true} duration={1300}> {props.name} </Link>
        </li>
    )
}

const Navbar = () =>{
    const[navbar,setNavbar] = useState(false);

    const changeBackground = () =>{
        if(window.scrollY >= 150){
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    window.addEventListener('scroll',changeBackground);
        return(
                <nav className={navbar ? 'navbar active' : 'navbar'}>
                    <ul className="nav_menu" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                        <Url to="me" name="Me" />
                        <Url to="works" name="Works" />
                        <Url to="blog" name="Blog" />
                        <Url to="ask" name="Ask" />
                    </ul>
                </nav>
    )
}

export default Navbar;

