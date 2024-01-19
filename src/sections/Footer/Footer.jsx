import React from 'react';

import FooterInfoContainer from './FooterInfoContainer';

import './Footer.scss';

const Footer = () => {
    return (
        <footer>
            <div className='contact-form-container'>
                <form onSubmit={(e) => e.preventDefault()}>
                    <input
                        type='email'
                        placeholder='Your email'
                        className='contact-email-input'
                    />
                    <input
                        type='submit'
                        value='Subscribe Now!'
                        className='contact-submit-btn'
                    />
                </form>
            </div>
            <FooterInfoContainer />

            <div className='copyright-info-container'>
                <p>
                    © Letterboxd Limited. Made by fans in Aotearoa. Film data
                    from TMDb. Mobile site.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
