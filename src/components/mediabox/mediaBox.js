import React from 'react';
import './index.css';

const MediaBox = ({ mediaImg, title, subtitle, subtitle2, buttonText, linkTo }) => {
  return (
    <div className='media__container'>
        <div className='media'>
            <img src={mediaImg} alt="Ceyonna Smith" id='home'/>  
        </div>
        <div className='media__content'>
            <h1>{title}</h1>
            <p>{subtitle}</p>
            <h2>{subtitle2}</h2>
            <a href={linkTo}><button className='media__btn'>{buttonText}</button></a>
        </div>
    </div>
  )
}

export default MediaBox