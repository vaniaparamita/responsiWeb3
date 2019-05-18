import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function Header(){
    return (
        <React.Fragment>
            <div className="header-area">
                <div className="row">
                    <div className="col-md-2 col-sm-12">
                        <div className="logo-area">
                            <a>
                                <img src="assets/images/logos.png" alt="REACT WEB 3" />
                            </a>
                        </div>
                    </div>
                    <div className="col-md-10 col-sm-12 text-right">
                        <div className="menu-area">
                            <ul className="nav nav-pills">
                                <li>
                                    <Link to="/profile">
                                        <span className="flaticon-user"></span> Profile
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/resume">
                                        <span className="flaticon-application"></span> Resume
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/Services">
                                        <span className="flaticon-layers-1"></span> Services
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/Portfolio">
                                        <span className="flaticon-gallery-1"></span> Portfolio
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/testimonial">
                                        <span className="flaticon-rating"></span> Testimonial
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/contact">
                                        <span className="flaticon-chat"></span> Contact
                                    </Link>
                                </li>                           
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Header;