import React, { useState } from 'react'
import './index.css'

export default function Header() {
    // state indicates whether user is scrolled to top of page
    const [isAtTop, setIsAtTop] = useState(true)

    // state indicates whether mobile menu is displayed or not
    const [showMobileMenu, setShowMobileMenu] = useState(false)

    // call scroll handler when user scrolls
    window.onscroll = function () { handleScroll() }

    // update header background when user scrolls
    const handleScroll = () => {
        if (isAtTop && window.pageYOffset > 100) {
            setIsAtTop(false)
        } else if (!isAtTop && window.pageYOffset <= 100) {
            setIsAtTop(true)
        }
    }

    // show menu when user clicks menu icon on mobile
    const handleMobileMenuToggle = () => {
        console.log('mobile clicked')
        setShowMobileMenu(!showMobileMenu)
    }

    return (
        <header>
            <div className={isAtTop ? 'header-bg' : 'header-bg active-header'} style={!isAtTop ? { height: '100%' } : {}}></div>
            <div className='header-flex' style={!isAtTop ? { color: 'black' } : {}}>
                <a className='header-logo' href='/'>Athens</a>
                <div className='nav-flex' >
                    <a className='nav-item' href='/menu'>Menu</a>
                    <a className='nav-item' href='/#about'>About Us</a>
                    <a className='nav-item' href='/#location'>Location</a>
                    <a className='nav-item' href='/#contact'>Contact</a>
                    <button className='icon-btn-container' onClick={handleMobileMenuToggle}>
                        <i className="mobile-menu-icon fas fa-bars"></i>
                    </button>
                </div>
            </div>
            <div className='mobile-menu' style={showMobileMenu ? { left: 0 } : {}}>
                <button className='icon-btn-container mobile-menu-exit-btn' onClick={handleMobileMenuToggle}>
                    <i className="mobile-menu-times far fa-times"></i>
                </button><br/>
                <a className='mobile-nav-item' href='/menu'>Menu</a><br />
                <a className='mobile-nav-item' href='/#about'>About Us</a><br />
                <a className='mobile-nav-item' href='/#location'>Location</a><br />
                <a className='mobile-nav-item' href='/#contact'>Contact</a><br />
            </div>
        </header>
    )
}