import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <footer className="footer-part">
                <div className='d-flex justify-content-evenly pt-4'>
                    <div>
                        <h4>Contact</h4>
                        <p>Email : info@example.com</p>
                        <p>Phone : +1 5589 55488 55s</p>
                        <p>https://facebook.com/</p>
                    </div>
                    <div>
                        <h4>Extra Services</h4>
                        <p>Online Support</p>
                        <p>Live Support</p>
                        <p>Over Time</p>
                        <p></p>
                    </div>
                    <div>
                        <h4>Instructors</h4>
                        <p>Jamie Bettison</p>
                        <p>Carl Taylor</p>
                        <p>Michelle Nicholson</p>
                        <p>Chip Bridgmon</p>
                    </div>
                </div>
                <div>
                    <p><small>@ Copyright 2017-2021.</small></p>
                    <p><small>All right reserved. Powred by <b>Mahamudul Hasan</b></small></p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;