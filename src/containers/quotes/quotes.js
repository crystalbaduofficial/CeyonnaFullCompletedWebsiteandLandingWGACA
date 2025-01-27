import React from 'react';
import './index.css';
import TestimonialBG from '../../assets/images/earthwsun.png'

const Quotes = () => {
  return (
    <div className='hero__container'>
        <div className='hero'>
            <img src={TestimonialBG} alt='Ceyonna Smith Testimonials' />
        </div>
        <div className='hero__row'>
            <div className='hero__content'>
                
                <div className='quotes__text'>    
                    <h1>Testimonials</h1>
                    <div className='quote__container'>
                        <h1>"Ceyonna has truly been life-changing. It's not just a website, it's a portal to my best self. 
                        Through her guidance, I've learned to let go of old limitations 
                        and create a reality where I feel empowered and unstoppable. This is more than coaching, 
                        it's a revolution for your mind and soul."
                        </h1>
                        <p>- Amara J., an Entrepreneur | South Africa</p>
                    </div>
                    <div className='quote__container'>
                        <h1>"I've always felt stuck, as if I was living in someone else's version of life. 
                        Ceyonna's teachings gave me the tools to break free and design my own realm—one where I'm thriving. 
                        Every resource on her site is thoughtfully designed to help you step into your power. This is the future of personal growth."
                        </h1>
                        <p>- Ethan R., Creative Director | United Kingdom</p>
                    </div>
                    <div className='quote__container'>
                        <h1>"Working with Ceyonna has been a journey of awakening. Her programs helped me realign my mind, break through adversity, and take control of my destiny. 
                        The content on CeyonnaSmith.com inspires you to rise higher and reach deeper than you ever thought possible. If you're ready to elevate, this is where you start. "</h1>
                        <p>- Jasmine T., Wellness Coach | Los Angeles, USA</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Quotes