import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll'
import logo from './images/logo.png'

import './Navbar.css'

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMenu = () => setClick(false)

    return (
        <div className='header'>

            <nav className='navbar'>
                <Link href='/' className='logo'>
                    <img src={logo} />
                </Link>

                <div className='hamburger' onClick={handleClick}>

                    {click ? <FaTimes /> : <FaBars />}

                </div>

                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <Link to="home" spy={true} smooth={true} offset={0} duration={350} onClick={closeMenu}>Home</Link>
                    </li>

                    <li className='nav-item'>
                        <Link to="about" spy={true} smooth={true} offset={0} duration={350} onClick={closeMenu}>About</Link>
                    </li>

                    <li className='nav-item'>
                        <Link to="testimonials" spy={true} smooth={true} offset={0} duration={350} onClick={closeMenu}>Testmonials</Link>
                    </li>

                    <li className='nav-item'>
                        <Link to="services" spy={true} smooth={true} offset={0} duration={350} onClick={closeMenu}>Services</Link>
                    </li>
                </ul>

            </nav>
        </div >
    )
}

export default Navbar