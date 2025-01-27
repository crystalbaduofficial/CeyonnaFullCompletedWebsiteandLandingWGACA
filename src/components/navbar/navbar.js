import React, { useState } from "react";
import'./index.css';
import Logo from '../../assets/images/cslogo.png';
import { RiMenuFill, RiCloseLine } from 'react-icons/ri';


const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false);

    const Menu = () => (
        <nav>
            <p><a href="/">HOME</a></p>
            <p><a href="https://cal.com/ceyonnasmith">OFFERINGS</a></p>
            <p><a href="/about">ABOUT</a></p>
            <p><a href="/testimonials">TESTIMONIALS</a></p>
            <a className="menubutton" href={"https://cal.com/ceyonnasmith"}><button href="https://cal.com/ceyonnasmith">GET STARTED</button></a>
        </nav>
    ) 
  return (
    <div className='navbar'>
        <div className="navbar__logo">
            <a href="/">
                <img src={Logo} alt="Ceyonna Smith Logo" loading="lazy"/>
            </a>
        </div> 
        <div className="navbar__links">  
            <div className="navbar__links-container">
                <div className="nav__container">
                    <p><a href="/">HOME</a></p>
                    <p><a href="https://cal.com/ceyonnasmith">OFFERINGS</a></p>
                    <p><a href="/about">ABOUT</a></p>
                    <p><a href="/testimonials">TESTIMONIALS</a></p>
                    <a href={"https://cal.com/ceyonnasmith"}><button href="https://cal.com/ceyonnasmith">GET STARTED</button></a>
                </div>
            </div>
            <div className="navbar__menu">
                {toggleMenu
                ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)}/>
                : <RiMenuFill color="#fff" size={27} onClick={() => setToggleMenu(true)}/>
                }
                {toggleMenu && (
                <div className="nav-menu__container">
                    <div className="menu__links">
                        <Menu />
                    </div>
                </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default Navbar