import React from 'react';
import "./index.css";
import Logo from '../../assets/images/cslogo.png';

const Footer = () => {
  return (
    <div className="footer section__padding">
        <div className='footer__logo'>
            <a href="/">
                <img src={Logo} alt="Etheware Space 2022" loading="lazy"/>
            </a>
        </div>
        <h1 className='fh1'>“When we heal ourselves, we heal the world. Together, we rise.”</h1>
        <div className="footer-links">
            <div className="footer-links_div">
                <h4>Offerings</h4>
                <p><a href="https://cal.com/ceyonnasmith">Get Started</a></p>
                <p><a href="https://cal.com/ceyonnasmith">Speaking Events</a></p>
                <p><a href="/gratitude-jar">Gratitude Jar</a></p>
            </div>
            <div className="footer-links_div">
                <h4>Company</h4>
                <p><a href="/terms-of-service">Terms of Service</a></p>
                <p><a href="/privacy-policy">Privacy Policy</a></p>
                <p><a href="/get-in-touch">Get In Touch</a></p>
            </div>
           
            
            <div className="footer-links_div">
                <h4>Info</h4>
                <p><a href={"/about"}>About Ceyonna</a></p>
                <p><a href={"https://www.instagram.com/ceyonnasmith/"}>Instagram</a></p>
                <p><a href={"https://www.youtube.com/ceyonnasmith"}>Youtube</a></p>
                
            </div>

            <div className="footer-links_div">
                <h4>Get In Touch</h4>
                <p>Email Us:</p>
                <p><a href={"mailto:cs@ceyonnasmith.com"}>cs@ceyonnasmith.com</a></p>
            </div>
            </div>
            <div className="footer-copyright">
                <p>HELPING THE WORLD RAISE THE COLLECTIVE CONSCIOUSNESS</p>
                
                <p>@2025 CeyonnaSmith.com. All rights reserved.</p>
                <p><a className="gradient__text" href='https://www.etheware.com/create'>Site made by ETHEWARE</a></p>
            </div>
  </div>
  )
}

export default Footer
