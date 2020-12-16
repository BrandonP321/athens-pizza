import React from 'react'
import './index.css'

export default function AboutUsSection() {
    return (
        <div className='about-section-container'>
            <div className='about-anchor' id='about'></div>
            <h2>About Us</h2>
            <div className='about-flex'>
                <p className='about-text'>
                    Our family owned restaurant is based on the belief that our customers' needs of delicious tasting and freshly prepared meals are of the utmost importance. As a result, a high percentage of our business is from repeat customers and referrals. We have been in business for over 30 years and take pride in our food, our staff and our customers. Come to Athens Pizza for a family friendly environment and a great tasting meal. When you're at Athens, you're family.
                </p>
                <div className='about-img-container'>
                    <img className='about-img' src='https:/via.placeholder.com/1920x1080' />
                </div>
            </div>
        </div>
    )
}
