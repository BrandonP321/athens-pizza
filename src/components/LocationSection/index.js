import React from 'react'
import './index.css'

export default function LocationSection() {
    return (
        <div className='location-section-container'>
            <div className='location-text-container'>
                <h2>Location</h2>
                <p>959 E Main St,</p>
                <p>Auburn, WA</p>
                <p>98002</p>
                <a href='https://goo.gl/maps/AUeYP3G84jtQm97k7' target='_blank'>Get Directions</a>
            </div>
            <div className='location-map-container'>
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2705.3159270769306!2d-122.21848198412654!3d47.3081663165386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490587c718baffb%3A0x278cc3a5eb3de72f!2sAthens%20Pizza%20%26%20Pasta!5e0!3m2!1sen!2sus!4v1607577644303!5m2!1sen!2sus" 
                    frameborder="0" 
                    style={{border: 0}} allowfullscreen="" aria-hidden="false" 
                    tabindex="0">
                </iframe>
            </div>
        </div>
    )
}
