import React from 'react'
import './index.css'
import Hero from '../../components/Hero'
import AboutUsSection from '../../components/AboutUsSection'
import LocationSection from '../../components/LocationSection'
import ContactSection from '../../components/ContactSection'

export default function Home() {
    return (
        <div>
            <Hero />
            <div className='content content-responsive'>
                <AboutUsSection />
            </div>
            <div className='home-img'>
                <img src='https:/via.placeholder.com/1920x1080' />
            </div>
            <div className='content content-responsive'>
                <LocationSection />
                <ContactSection />
            </div>
        </div>
    )
}
