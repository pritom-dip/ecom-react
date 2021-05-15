import React from 'react';

const Footer = () => {
    return (
        <footer className="second-footer second-footer-homepage">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="about-us">
                            <div className="logo">
                                <img src="images/logo-icon.png" alt="" />
                                <div className="right-content">
                                    <h2>Fenco</h2>
                                    <span>Fashion, Cosmetics & Beauty</span>
                                </div>
                            </div>
                            <p>I'm baby master cleanse health goth etsy gastropub. Bitters whatever small batch fingerstache mumblecore, palo santo umami typewriter tattooed truffaut blue bottle twee.</p>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="footer-widget">
                            <h4>Policy Info</h4>
                            <ul>
                                <li><a href="contact-us.html">Privacy Policy</a></li>
                                <li><a href="contact-us.html">Terms of Use</a></li>
                                <li><a href="contact-us.html">Terms of Sale</a></li>
                                <li><a href="contact-us.html">Report Abuse</a></li>
                                <li><a href="contact-us.html">Report Spam</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="footer-widget">
                            <h4>Useful Links</h4>
                            <ul>
                                <li><a href="grid-categories.html">Women Collection</a></li>
                                <li><a href="grid-categories.html">Man Collection</a></li>
                                <li><a href="grid-categories.html">Kids Collection</a></li>
                                <li><a href="grid-categories.html">Accesories</a></li>
                                <li><a href="grid-categories.html">Gift & Gift Cards</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="footer-widget">
                            <h4>Customer Support</h4>
                            <ul>
                                <li><a href="contact-us.html">Contact Us</a></li>
                                <li><a href="contact-us.html">FAQs</a></li>
                                <li><a href="contact-us.html">Order Tracking</a></li>
                                <li><a href="contact-us.html">Shopping &amp; Returns</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="sub-footer">
                            <div className="row">
                                <div className="col-lg-6">
                                    <p>© All rights reserved. Fenco Team 2021.</p>
                                </div>
                                <div className="col-lg-6">
                                    <ul className="social-icons">
                                        <li><a href="https://facebook.com/" target="_blank"><i className="fa fa-facebook"></i></a></li>
                                        <li><a href="https://twitter.com/" target="_blank"><i className="fa fa-twitter"></i></a></li>
                                        <li><a href="https://linkedin.com/" target="_blank"><i className="fa fa-linkedin"></i></a></li>
                                        <li><a href="https://rss.com/" target="_blank"><i className="fa fa-rss"></i></a></li>
                                        <li><a href="https://dribbble.com/" target="_blank"><i className="fa fa-dribbble"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;