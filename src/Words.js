import '../src/App.css'
import React from 'react'

function Words() {
  return (
    <div className='words-section'>
      <h1 className='words-header'>Wall of love</h1>

      <div className='love-quote'>
        <img id='image-1' src='' alt=''></img>
        <img id='image-1' src='' alt=''></img>
        <img id='image-1' src='' alt=''></img>
        <img id='image-1' src='' alt=''></img>
      </div>

      <div className='love-texts'>
        <p id='love-text'>"I enjoy working with Audiogeeks Recording Studios because they offer you even better than what you might have imagined." - Thando Dzila - Videographer & Video editor</p>

        <p id='love-text'>"This is actually the same guy that taught me how to produce!, Audiogeeks recording studios is simply the best" - Mzikayise Mnyaka - Artist and music producer</p>

        <p id='love-text'>"This was my first time to actually hear high quality content coming straight from the hood!" -Sbabalo "Sbeshido Zeezy" Xhama - Artist & Music producer</p>
      </div>
    </div>
  )
}

export default Words