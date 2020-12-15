import React, { useState } from 'react'
import './index.css'

export default function Header() {
    const [isAtTop, setIsAtTop] = useState(true)

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

    return (
        <header>
            <div className={isAtTop ? 'header-bg': 'header-bg active-header'} style={!isAtTop ? { height: '100%' }: {}}></div>
            <div className='header-flex' style={!isAtTop? {color: 'black'}: {}}>
                <a className='header-logo' href='/'>Athens</a>
                <div className='nav-flex' >
                    <a className='nav-item' href='/menu'>Menu</a>
                    <a className='nav-item' href='/#about'>About Us</a>
                    <a className='nav-item' href='/#location'>Location</a>
                    <a className='nav-item' href='/#contact'>Contact</a>
                </div>
            </div>
        </header>
    )
}