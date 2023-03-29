import React from 'react'
import './App.css';
import Collab from './Images/collabsection.jpg'
import ndebemzii from './Images/ndebe.jpg'
import Facebook from './Images/facebook.png';
import Twitter from './Images/twitter.png';
import Telegram from './Images/telegram.png';
import Whatsapp from './Images/whatsapp.png';
// import sbeshido from './Images'

function Collaborationsection() {
  return (
    <div className="collab-section" >
        <h1 className='collab-header'>Studios we collaborate with</h1>

        <div className='collab-content'>
            <img className='collab-image' src={Collab} alt='a studio session with a producer and the artist analyzing the sound waves on the pc screen. '/>

            <p id='collab-paragraph'>Since the producer is very busy to hold studio recording sessions with aspiring artists, we have other studios- around <span id='location'>khayelitsha</span> that we collaborate with, where artists can go and record in.</p>
        </div>

        <h1 className='squad'>meet the squad</h1>

        <div className='squad-content'>
            <h1 className='studio-name'>Trophy Records</h1>

            <div className='producer-content'>
            <img src={ndebemzii} className='squad-image' alt='ndebe mzii(left) with one of young artists in the game who goes by the name of Mieno (right)'/>

            <h4 className='producer-name'>Producer, CEO - Ndebe Mzii(left)</h4>
            <p id='image-info'> with one of his aspiring young artists called Mi3no. (right)</p>

            <p id='collab-paragraph'>Located in BM section, <span id='location'>khayelitsha </span>founded by Mzikayise Mnyaka a.k.a <em>Ndebe Mzii</em> in , this recording label is one of the most promising record labels with the most promising talented artists- one of them being the one featured in the photo above(right). The main genre in this record label is Hip Hop/Trap but also caters for artists of different genres such as: Amapiano, RnB, etc.</p>

            <div className='studio-links'>
            <a href="/"><img id='studio-icon' alt="facebook logo" src={Facebook} /></a>
            <a href="/"><img id='studio-icon' alt="twitter logo" src={Twitter} /></a>
            <a href="/"><img id='studio-icon' alt="telegram logo" src={Telegram} /></a>
            <a href="/"><img id='studio-icon' alt="whatsapp logo" src={Whatsapp} /></a>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Collaborationsection