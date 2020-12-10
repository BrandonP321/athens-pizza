import React from 'react'
import './index.css'

export default function Hero() {

    return (
        <div className='hero-container'>
            <img className='hero-img' src='https://via.placeholder.com/1920x1080' />
            <div className='hero-text-container'>
                <h1>Athens Pizza & Pasta</h1>
                <p>Home of the Grinder</p>
                <button>Menu</button>
            </div>
        </div>
    )
}
