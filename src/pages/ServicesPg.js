import React from 'react';
import Navbar from '../components/navbar/navbar';
import Banner from '../components/banner/banner';
import Footer from '../components/footer/footer';
import ServicesPage from '../components/serviceCard/ServicesPage';
import MediaBox from '../components/mediabox/mediaBox';
import Services from '../components/services/services';
import Quotes from '../containers/quotes/quotes';



const ServicesPg = ({mediaImg, title, subtitle}) => {
  return (
    <div className='home'>
      <Navbar />
      <MediaBox
        mediaImg={require("../assets/images/services.png")}
        title={"Explore Our Services"}
        subtitle={"Explore a variety of services designed to nurture your mind, body, and spirit. Whether you're looking to seek guidance on your spiritual journey, or experience the transformative power of energy healing, we have something for everyone."}/>
      <ServicesPage />
      <Quotes />
      <Footer />
    </div>
  )
}

export default ServicesPg