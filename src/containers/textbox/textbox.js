import React from 'react';
import './textbox.css';

const Textbox = ({title, desc, link}) => {
  return (
    <div className='textbox'>
       <div className='tb__column'>
        <div className='textbox__content'>
            <h1 className='title'>{title}</h1>
            <p className='description'>{desc}</p>
            <a href={link}><button className='tb_button'>Book Now</button></a>
        </div>
       </div>
    </div>
  )
}

export default Textbox
