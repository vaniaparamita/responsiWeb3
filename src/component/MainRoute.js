import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Profile from '../page/Profile';
import Resume from '../page/Resume';
import Services from '../page/Services';
import Portfolio from '../page/Portfolio';
import Testimonial from '../page/Testimonial';
import Contact from '../page/Contact';

function MainRoute(){
    return (
        <Switch>
            <Route exact path="/" component={Profile}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/resume" component={Resume}/>
            <Route path="/services" component={Services}/>
            <Route path="/portfolio" component={Portfolio}/>
            <Route path="/testimonial" component={Testimonial}/>
            <Route path="/contact" component={Contact}/>
        </Switch>
    );
}

export default MainRoute;
