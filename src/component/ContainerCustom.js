import React, { Component } from 'react';
import MainRoute from './MainRoute';
import Header from './Header';
import MobileMenu from './MobileMenu';
import Widget from './Widget';

function ContainerCustom(){
    return (
        <React.Fragment>                        
        <div className="pencile-area">
          <div className="container">
            <div className="row">
              <div className="col-md-12 acurate pencil-area-blue" >
                <div id="pencil-info">
                <Header/>
                <MobileMenu/>                    
                <div className="pencil-content-area">
                    <div className="tab-content clearfix">
                        <MainRoute/>
                    </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        <Widget/>
        </div>
        </React.Fragment>
    );
}

export default ContainerCustom;