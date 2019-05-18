import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function MobileMenu(){
    return (
        <React.Fragment>
            <div className="mobile-menu-area acurate">
                <div className="container margin-15">
                    <div className="row ">
                        <div className="col-md-12">
                            <div className="mobile-menu">
                                <nav id="dropdown">
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
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default MobileMenu;