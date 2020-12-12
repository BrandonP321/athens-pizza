import React from 'react'
import './index.css'
import Hero from '../../components/Hero'
import LocationSection from '../../components/LocationSection'
import ContactSection from '../../components/ContactSection'

export default function Home() {
    return (
        <div>
            <Hero />
            <div className='content content-responsive'>
                <LocationSection />
                <ContactSection />
            </div>
        </div>
    )
}
