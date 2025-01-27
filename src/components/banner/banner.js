import React from 'react';
import './index.css';
import SplineBG from '../spline/splinebg';

const Banner = () => {
  return (
    <div className='banner'>
        <div className='hero__container'>
            <div className='hero'>
                <SplineBG />
            </div>
            <div className='hero__row'>
                <div className='banner__content'>
                    <h1>READY TO BEGIN YOUR JOURNEY?</h1>
                    <p>Take the first step toward raising your vibration and aligning with your highest self. We invite you to reach out, explore our offerings, and join a community dedicated to growth and transformation</p>
                    <p2>Embarking on a path of self-discovery and spiritual growth is a courageous step.  Whether you’re seeking clarity, healing, or simply a deeper connection to your inner self, our services are designed to support your unique journey</p2>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner
