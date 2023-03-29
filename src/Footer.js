import React from 'react'
import Facebook from './Images/facebook.png';
import Twitter from './Images/twitter.png';
import Telegram from './Images/telegram.png';
import Whatsapp from './Images/whatsapp.png';
import './App.css'
// import Aos from 'aos';

import Companylogo from './Images/audiogeeks recording studios.png'


function Footer() {
  return (
    <section className="footerSection">
      <div className='footer-blocks'>

      <div className='footer-block'>
      <h3 className='footer-header'>Get Started</h3>
      <p className='footer-links'><a id='get-started' href='/'>mixing services</a></p>
      <p className='footer-links'><a id='get-started' href='/'>mastering services</a></p>
      <p className='footer-links'><a id='get-started' href='/'>Upgrade License</a></p>
      <p className='footer-links'><a id='get-started' href='/'>need Beats?</a></p>
      <p className='footer-links'><a id='get-started' href='/'>Contact</a></p>
      </div>

      <div className='footer-block guides'>
      <h3 className='footer-header'>Guides</h3>
      <p className='footer-links'><a id='get-started' href='/'>Small studio setup gear</a></p>
      <p className='footer-links'><a id='get-started' href='/'>Getting Started as a recording artist</a></p>
      <p className='footer-links'><a id='get-started' href='/'>Distributing your music</a></p>
      </div>

      <div className='footer-block'>
      <h3 className='footer-header'>Partners</h3>
      <p className='footer-links'><a id='trophy-records' href='/'>Trophy Records</a></p>
      <p className='footer-links'><a id='wmn-productions' href='/'>WMN Productions</a></p>
      <p className='footer-links'><a id='get-started' href='/'>Unmatched Creatives</a></p>
      </div>

      <div className='footer-block access'>
      <h3 className='footer-header'>Get Access to...</h3>
      <p className='footer-links'><a id='trophy-records' href='/'>Get access to free 2+ beats and be the first to receive updates about new beats and special deals.</a></p>
      </div>
      </div>


      <hr id='footer-divider'></hr>

      <div className='footer-bottom'>
        <a href='/'><img alt='Company logo' src={Companylogo} /></a>

        <div id='footer-socials'>
        <a href='/'><img alt='facebook logo' src={Facebook} /></a>
        <a href='/'><img alt='twitter logo' src={Twitter} /></a>
        <a href='/'><img alt='telegram logo' src={Telegram} /></a>
        <a href='/'><img alt='whatsapp logo' src={Whatsapp} /></a>
        </div>

      </div>
        <h5 className='company-name'>Audiogeeks Recording Studios®</h5>
    </section>
  )
}

export default Footer;