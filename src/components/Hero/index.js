import React from 'react'
import './index.css'

export default function Hero() {

    return (
        <div className='hero-container'>
            <img className='hero-img' src='assets/images/hero1.jpg' />
            <div className='hero-overlay'></div>
            <div className='hero-text-container'>
                <h1>Athens Pizza & Pasta</h1>
                <p>Home of the Grinder</p>
                <a href='/menu'>Menu</a>
            </div>
        </div>
    )
}
