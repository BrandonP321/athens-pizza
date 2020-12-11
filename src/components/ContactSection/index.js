import React from 'react'
import './index.css'

export default function ContactSection() {
    const handleFormSubmit = event => {
        event.preventDefault();
    }

    return (
        <div className='contact-section-container'>
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
                <form className='contact-form'>
                    <div className='form-group name-form-group'>
                        <label for='name-input'>Name</label>
                        <input className='form-control' id='name-input' type='text' />
                    </div>
                    <div className='form-group email-form-group'>
                        <label for='email-input'>Email</label>
                        <input className='form-control' id='email-input' type='email' />
                    </div>
                    <div className='form-group'>
                        <label for='subject-input'>Subject</label>
                        <input className='form-control' id='subject-input' type='text' />
                    </div>
                    <div className='form-group'>
                        <label for='message-input'>Message</label>
                        <textarea className='form-control' id='message-input'></textarea>
                    </div>
                    <div className='contact-form-btns'>
                        <button className='contact-submit-btn' onClick={handleFormSubmit}>Send</button>
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
