import React from 'react';
import Navbar from '../components/navbar/navbar';
import Hero from '../components/hero/hero';
import './index.css';
import LandingFooter from '../components/landingfooter/landingfooter';
import Banner from '../components/banner/banner';
import Services from '../components/services/services';
import Quotes from '../containers/quotes/quotes';



const Homepage = () => {
  return (
    <div className="page__wrapper">
      <div className="home">
        <Navbar />
        <Hero />
        <LandingFooter />
      </div>
    </div>
  );
};

export default Homepage;
