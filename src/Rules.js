import './App.css'
import waves from '../src/Images/waves.jpeg'
import mixing from '../src/Images/Mixing.jpg'
import mastering from '../src/Images/02_adjusting_multiband.jpg'

import React from 'react'

function Rules() {
  return (
    <div className='rule-section'>
      <h1 className='collab-header'>Project submission requirements</h1>
      <h2 className='collab-sub'>Let's bring your vision to life!</h2>

        <p id='intro-para'>Make sure that your time, hard-work and energy result in the song you want, with 10+ years experience, we have the perfect experience to give you the best quality.</p>
      

      <div className='rule-contents'>
      <div className='rule-content 1'>
        <img id='rule-image' src={waves} alt='editing'></img>
        <h4 className='question-title'>Editing</h4>
        <ul>
          <li>Quantize and time alignment</li>
          <li>Sound replacement to achieve optimal quality</li>
          <li>Re-amping</li>
          <li>Sound restoration to any clipped or distorting sounds</li>
          <li>Corrective vocal tuning</li>
          <li>Noise reduction</li>
          <li>Comping</li>
          <li>Balancing</li>
        </ul>
      </div>
        
      <div className='rule-content 2'>
        <img id='rule-image' src={mixing} alt='mixing'></img>
        <h4 className='question-title'>mixing</h4>
        <ul>
          <li>Panning and imaging</li>
          <li>Equalization</li>
          <li>Compressing</li>
          <li>Effects, reverbs, delays, chorusing etc</li>
          <li>mix automation</li>
        </ul>
      </div>

      <div className='rule-content 3'>
        <img id='rule-image' src={mastering} alt='mastering'></img>
        <h4 className='question-title'>mastering</h4>
        <ul>
          <li>Mix bus compression</li>
          <li>Mix bus equalization</li>
          <li>Imaging and widening the stereo field</li>
          <li>Subtle limiting</li>
        </ul>
      </div>

      </div>
      <p id='intro-para'>I will deliver a final mix which you can listen to in your own setup environment, and I can make the adjustments you need for the mix to be perfect to you. A clean version, instrumental and acapella are included in the rate.</p>

      <a id='quote' href='/' >request a quote</a>

    </div>
  )
}

export default Rules