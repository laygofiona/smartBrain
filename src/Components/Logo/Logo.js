import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Logo.css';
import Brain from './brain.png';

const Logo = () => {
    return (
        <div className="ma4 mt0">
            <Tilt className="Tilt h-50 w4 br2 shadow-2 pa3">
                <div style={{ height: '75px', width: '75px'}}>
                    <img alt="logo" src={Brain}></img>
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;