import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import SidebarCart from '../SidebarCart/SidebarCart';
import { FaCartArrowDown } from 'react-icons/fa';
import { GrSearch } from "react-icons/gr";

const Header = () => {

    const carts = useSelector(state => state.cart);
    const [active, setActive] = useState(false);

    return (
        <>
            <header className="site-header" style={{ backgroundColor: '#fff' }}>
                <div className="container expanded">
                    <div className="header-wrap">
                        <div className="header-logo">
                            <Link to="/">
                                <h2>Ecom.</h2>
                            </Link>
                        </div>
                        <div className="header-nav">
                            <ul className="main-menu">

                                <li><a href="#">Home</a></li>

                                <li className="menu-item-has-children"><a href="#">Pages</a>
                                    <ul className="sub-menu">
                                        <li><a href="about-us.html">About Us</a></li>
                                        <li><a href="product-details-v1.html">Product Details V1</a></li>
                                        <li><a href="product-details-v2.html">Product Details V2</a></li>
                                        <li><a href="project-details-v1.html">Project Details V1</a></li>
                                        <li><a href="project-details-v2.html">Project Details V2</a></li>
                                        <li><a href="post-details.html">Post Details</a></li>
                                    </ul>
                                </li>

                                <li ><a href="#">Shop</a></li>

                                <li><a href="contact-us.html">Contact Us</a></li>

                            </ul>
                        </div>
                        <div className="header-widgets">
                            <ul className="right-menu">
                                <li className="menu-item menu-search">

                                    <GrSearch style={{ color: '#2a2a2a', fontSize: '22px', cursor: 'pointer' }} />
                                </li>
                                <li onClick={() => setActive(true)} style={{ marginLeft: '15px' }}>
                                    <div style={{ position: 'relative' }}>
                                        <FaCartArrowDown style={{ color: '#2a2a2a', fontSize: '22px', cursor: 'pointer' }} />
                                        <span style={{ position: 'absolute', top: '-13px', padding: '0px 8px', border: '100px', background: '#fb774b', color: '#fff' }}>{carts.length}</span>
                                    </div>
                                </li>
                                <li className="menu-item menu-mobile-nav">
                                    <a href="#" className="menu-bar" id="menu-show-mobile-nav">
                                        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>

            {/* <div id="search" className="open">
                <button type="button" class="close"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button>
                <form>
                    <input type="search" value="" placeholder="Search..." />
                    <button type="submit" class="primary-button"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></button>
                </form>
            </div> */}


            <SidebarCart active={active} setActive={setActive} />

        </>
    );
};

export default Header;