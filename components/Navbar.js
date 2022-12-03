import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import {Link as LinkRoll} from 'react-scroll'
import {FaBars, FaTimes} from 'react-icons/fa'
import { Button } from './Button'
import './Navbar.css';
import {IconContext} from 'react-icons/lib'

function Navbar() {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        } else{
            setButton(true)
        }
    }

    useEffect(() => {
        showButton();
    }, [])

    window.addEventListener('resize',showButton);


  return (
    <>
    <IconContext.Provider value={{ color: '#fff'}}>
    <div className='navbar active'>
        <div className='navbar-container container'>
            <Link to='/' className='navbar-logo' onClick = {closeMobileMenu}>
                <img src = 'images/Logoandtitlewhite.png' alt='logoandtitlewhite' className='navbar-icon'/>
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                {click ? <FaTimes /> : <FaBars/>}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className="nav-item">
                    <LinkRoll to='herosection' smooth={true} duration={1000} className='nav-links' onClick = {closeMobileMenu}>Home</LinkRoll>
                </li>
                <li className="nav-item">
                    <LinkRoll to='herosection2' smooth={true} duration={1000} className='nav-links' onClick = {closeMobileMenu}>About</LinkRoll>
                </li>
                <li className="nav-item">
                    <LinkRoll to='cardss' smooth={true} duration={1000} className='nav-links' onClick = {closeMobileMenu}>Team</LinkRoll>
                </li>
                {/* <li className="nav-btn">
                    {button ? (
                        <Link to='/sign-up' className='btn-link'>
                            <Button buttonStyle='btn--outline' >SIGN UP</Button>
                        </Link>
                    ): (
                        <Link to='/sign-up' className ='btn-link' onClick = {closeMobileMenu}>
                            <Button buttonStyle='btn--outline' buttonSize='btn--mobile'>
                                SIGNUP
                            </Button>
                        </Link>
                    )}
                </li> */}
            </ul>
        </div>
    </div>
    </IconContext.Provider>

    </>
  )
}

export default Navbar