import React from 'react';
import './services.css';
import SplineBG from '../spline/splinebg';
import Textbox from '../../containers/textbox/textbox';

const Services = () => {
  return (
    <div className='services'>
      <div className='hero__container'>
        <div className='hero'>
            <SplineBG />
        </div>
        <div className='services__container_hero'>
          <div className='service__list'>
              <div className='services__header'>
                <h1>OUR SERVICES</h1>
                <div className='decorative__line'/>
              </div>
              <Textbox 
                  title={"SHADOW WORK SESSION"}
                  desc={"Realign your energy fields and release blocks that prevent your spiritual growth. Each session is personalized to your unique needs."}
                  link={'https://cal.com/ceyonnasmith"'}
              />
              <Textbox 
                  title={"CONSCIOUSNESS COACHING"}
                  desc={"Empower yourself with tools and insights to elevate your consciousness and live a more fulfilled life."}
                  link={'https://cal.com/ceyonnasmith"'}
              />
          </div>
          <div className='service__list'>
          <div className='services__header'>
                <h1 className='blank'>BUSINESS CONSULTING</h1>
                <div className='decorative__line_blank'/>
              </div>
              <Textbox 
                  title={"ENERGY HEALING SESSIONS"}
                  desc={"Realign your energy fields and release blocks that prevent your spiritual growth. Each session is personalized to your unique needs."}
                  link={'https://cal.com/ceyonnasmith"'}
              />
              <Textbox 
                  title={"MEDITATION WORKSHOPS"}
                  desc={"Learn techniques to connect with your inner self and experience peace and clarity in your everyday life."}
                  link={'https://cal.com/ceyonnasmith"'}
              />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
