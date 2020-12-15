import React from 'react'
import './index.css'

export default function Footer() {
    return (
        <footer>
            <div className='footer-flex'>
                <div className='footer-company-info footer-column'>
                    <h3>Athens</h3>
                    <p>959 E Main St,</p>
                    <p>Auburn, WA, 98002</p>
                    <p>253.939.7444</p>
                    <a href='mailto:Brothers@athenspizzaauburn.com'>Brothers@athenspizzaauburn.com</a>
                </div>
                <div className='footer-sitemap footer-column'>
                    <h3>Sitemap</h3>
                    <a href='/home'>Home</a><br />
                    <a href='/menu'>Menu</a><br />
                    <a href='/#about'>About Us</a><br />
                    <a href='/#location'>Our Location</a><br />
                    <a href='/#contact'>Contact</a><br />
                </div>
                <div className='footer-hours footer-column'>
                    <h3>Hours</h3>
                    <p>Mon-Thurs: 11AM-9PM</p>
                    <p>Fri & Sat: 11AM-10PM</p>
                    <p>Sun: 12AM-9PM</p>
                </div>
            </div>
        </footer>
    )
}
