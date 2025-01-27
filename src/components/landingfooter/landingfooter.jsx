import React from 'react';
import './index.css';
import Logo from '../../assets/images/cslogo.png';
import IGIcon from '../../assets/images/ig.png';
import YTIcon from '../../assets/images/yt.png';
import TiktokIcon from '../../assets/images/tiktok.png';

const LandingFooter = () => {
  return (
    <div className="footer section__padding">
        <div className='footer__logo'>
            <a href="/">
                <img src={Logo} alt="Ceyonna Smith Logo"/>
            </a>
        </div>
        <h1 className='fh2'>“When we heal ourselves, we heal the world. Together, we rise.”</h1>
        <div className='followus'>
            <p>FOLLOW US:</p>
            <div className='fuicons'>
                <a href='https://www.instagram.com/ceyonnasmith'><img src={IGIcon} alt="Ceyonna Smith Instagram"/></a>
                <a href='https://www.youtube.com/ceyonnasmith'><img src={YTIcon} alt="Ceyonna Smith Youtube"/></a>
                <a href='https://www.tiktok.com/ceyonnasmith'><img src={TiktokIcon} alt="Ceyonna Smith Tiktok"/></a>
            </div>
            <div className="lf__email">
                <p>FOR MORE INFORMATION, PLEASE CONTACT:</p>
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

export default LandingFooter
