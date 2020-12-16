import React, { useState } from 'react'
import './index.css'

export default function ContactSection() {
    const [contactInfo, setContactInfo] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const handleInputChange = event => {
        // grab name and value of property being changed
        const { name, value } = event.target
        // udpate state with new value
        setContactInfo({
            ... contactInfo,
            [name]: value
        })
    }

    const handleFormSubmit = event => {
        event.preventDefault();
        console.log(contactInfo)
    }

    return (
        <div className='contact-section-container'>
            <div className='contact-anchor' id='contact'></div>
            <div className='contact-text-container'>
                <h2>Contact Us</h2>
                <p>This is some text about contacting us!</p>
                <div className='socials-flex'>
                    <a href='https://www.facebook.com/Athenspizzaauburn' target='_blank' className='social-link'>
                        <i class="fab fa-facebook"></i>
                    </a>
                    <a href='https://www.instagram.com/athenspizzaauburn/' target='_blank' className='social-link'><i class="fab fa-instagram"></i></a>
                    <a href='#' className='social-link'><i class="fab fa-twitter"></i></a>
                </div>
            </div>
            <div className='contact-form-container'>
                <form className='contact-form' onSubmit={handleFormSubmit}>
                    <div className='form-group name-form-group'>
                        <label for='name-input'><strong>Name</strong></label>
                        <input className='form-control' id='name-input' type='text' name='name' value={contactInfo.name} onChange={handleInputChange} />
                    </div>
                    <div className='form-group email-form-group'>
                        <label for='email-input'><strong>Email</strong></label>
                        <input className='form-control' id='email-input' type='email' name='email' value={contactInfo.email} onChange={handleInputChange} />
                    </div>
                    <div className='form-group'>
                        <label for='subject-input'><strong>Subject</strong></label>
                        <input className='form-control' id='subject-input' type='text' name='subject' value={contactInfo.subject} onChange={handleInputChange} />
                    </div>
                    <div className='form-group'>
                        <label for='message-input'><strong>Message</strong></label>
                        <textarea className='form-control' id='message-input' name='message' onChange={handleInputChange} >{contactInfo.message}</textarea>
                    </div>
                    <div className='contact-form-btns'>
                        <button className='contact-submit-btn'>Send</button>
                        <div className='mobile-socials'>
                            <a href='https://www.facebook.com/Athenspizzaauburn' target='_blank' className='social-link'>
                                <i class="fab fa-facebook"></i>
                            </a>
                            <a href='https://www.instagram.com/athenspizzaauburn/' target='_blank' className='social-link'><i class="fab fa-instagram"></i></a>
                            <a href='#' className='social-link'><i class="fab fa-twitter"></i></a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
