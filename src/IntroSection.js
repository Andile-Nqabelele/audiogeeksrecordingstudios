import React from 'react'
import "./App.css"

function IntroSection() {
  return (
    <section className='intro-section'>
        <h1 id='intro'>Get the Highest Quality Mixing and Mastering  Services for Your Content</h1>
        <div className="beatsPromo">
          <div className='promo-text'>
            <h1 id="promo-header">Get 2+ FREE beats 🔥</h1>
            <p id="promo-sub">Straight to your inbox TODAY!</p>
          </div>
            <a id='promo-link' href='/'>Send them over!</a>
        </div>
    </section>
 
  )
}

export default IntroSection;