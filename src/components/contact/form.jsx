import React, { useRef} from 'react';
import './form.css';


const Form = () => {
  return <form className='form__contact'>
        <div className="form__input">
            <input 
                type="text"
                for="name" 
                placeholder='Full Name *' 
                name="name" 
            />
        </div>
        <div className="form__input">
            <input 
                type="email" 
                placeholder='Contact Email *' 
                name='email'
                for="email"
            />
        </div>
        <div className="form__input">
            <input 
                type="tel" 
                placeholder='Contact Number *' 
                name="phone"
                for="tel"
                />
        </div>
        <div className="form__input">
            <input 
                type="text" 
                placeholder='Type your city *' 
                name="message"
                for="message"/>
        </div>
        <div className="form__input">
            <textarea 
                rows={"10"} 
                placeholder="Tell us about
                    your inquiry:" 
                name="message"
                for="message"
            />
        </div>
        <button type='submit' value="send" className='submitBtn'>
            Submit
        </button>
        </form>
}

export default Form