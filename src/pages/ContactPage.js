import React from 'react';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
import './index.css';
import Contact from '../components/contact/contact';


const ContactPgae = () => {
  return (
      <div className="home">
        <Navbar />
        <Contact />
        <Footer />
      </div>
  );
};

export default ContactPgae;
