import React from 'react';
import './index.css';
import SplineBG from '../spline/splinebg';
import Ceyonna from '../../assets/images/ceyonna.png'


function Hero() {
    return (
        <div className='hero__container'> 
            <div className='hero'>
                <SplineBG />
            </div>
            <div className='hero__row'>
                <div className='hero__content'>
                    <h1>TRANSFORM ADVERSITY INTO OPPORTUNITY</h1>
                    <p>ASCEND TO NEW HEIGHTS WITH THE ALCHEMY OF RESILIENCE</p>
                    <h2>Together, we will reshape your past, present, and future, freeing you from all bondage. The mind trap ends now. Step into a vibrant reality where your true self thrives and contributes to raising collective consciousness.</h2>
                    <a href={"https://cal.com/ceyonnasmith"} className="header-form" id="email-form" > 
                        <button className='wl-su_btn' type="submit" value="Send" required>BOOK NOW</button>
                    </a>
                </div>  
                <div className='hs'>
                    <img src={Ceyonna} alt="Ceyonna Smith" loading="lazy"/>
                </div> 
            </div>
        </div>
    )
}

export default Hero