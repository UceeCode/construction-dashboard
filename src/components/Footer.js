import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className='footer'>
            <div className='footer-section'>
                <h4>Contact Us</h4>
                <p>Email: stoneworks@gmail.com</p>
                <p>Phone: +234-9072176329</p>
            </div>

            <div className='footer-section'>
                <h4>Follow Us</h4>
                <div className='social-media'>
                    <a href="" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                </div>
            </div>

            <div className='footer-section'>

                <h4>Quick Links</h4>
                <ul>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/privacy-policy">Privacy Policy</a></li>
                    <li><a href="/terms-of-service">Terms of Service</a></li>
                </ul>
            </div>
            <div className='footer-section'>
                <h4>Subscribe to Our Newsletter</h4>
                <form>
                    <input type="email" placeholder="Your email address" />
                    <button type="submit">Subscribe</button>
                </form>
            </div>
    
        </div>
    );
}

export default Footer;
