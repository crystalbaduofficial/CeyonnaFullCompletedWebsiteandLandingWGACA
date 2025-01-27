import React from 'react'
import Navbar from '../components/navbar/navbar'
import LandingFooter from '../components/landingfooter/landingfooter'
import Quotes from '../containers/quotes/quotes'
import './index.css'
import Hero from '../components/hero/hero'

const TestimonialsPage = () => {
  return (
    <div className='testimonials__pg'>
        <Navbar />
        <Quotes />
        <LandingFooter />  
    </div>
  )
}

export default TestimonialsPage
