import React from "react";
import "./ServicesPage.css";
import Textbox from "../../containers/textbox/textbox";

const ServicesPage = () => {
  return (
    <div className='servicespg'>
      <div className='hero__container'>
        <div className='servicebg'>
          <div className='services__container_hero'>
            <div className='service__list'>
                <div className='services__header'>
                  <h1>All Services</h1>
                  <div className='decorative__line'/>
                </div>
                <Textbox 
                    title={"SHADOW WORK SESSION - $129"}
                    desc={"Realign your energy fields and release blocks that prevent your spiritual growth. Each session is personalized to your unique needs."}
                    link={'/book-now'}
                />
                <Textbox 
                    title={"CONSCIOUSNESS COACHING - $95"}
                    desc={"Empower yourself with tools and insights to elevate your consciousness and live a more fulfilled life."}
                    link={'/book-now'}
                />
            </div>
            <div className='service__list'>
            <div className='services__header'>
                  <h1 className='blank'>BUSINESS CONSULTING</h1>
                  <div className='decorative__line_blank'/>
                </div>
                <Textbox 
                    title={"ENERGY HEALING SESSIONS - $20"}
                    desc={"Realign your energy fields and release blocks that prevent your spiritual growth. Each session is personalized to your unique needs."}
                    link={'/book-now'}
                />
                <Textbox 
                    title={"MEDITATION WORKSHOPS - $40"}
                    desc={"Learn techniques to connect with your inner self and experience peace and clarity in your everyday life."}
                    link={'/book-now'}
                />
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default ServicesPage;
