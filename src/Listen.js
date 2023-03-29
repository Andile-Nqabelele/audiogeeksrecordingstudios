import React from 'react'
import './App.css'

function Listen() {
  return (
    <div className='listen-section'>
        <h1 id='listen-header'>Listen to some of my work</h1>
        <div className='song-links'>
        <iframe title='embed' className='song-link' src="https://audiomack.com/embed/audiogeeksrecordingstudios/song/been-on-my-mind-ft-sbeshido-zeezy" scrolling="no" width="100%" height="252" scrollbars="no" frameBorder="0" />

        <iframe title='embed' className='song-link' src="https://audiomack.com/embed/audiogeeksrecordingstudios/song/finish-line-pozed" scrolling="no" width="100%" height="252" scrollbars="no" frameBorder="0" />

        <iframe className='song-link' title='link-3' src="https://audiomack.com/embed/audiogeeksrecordingstudios/song/ubomi-basekasi" scrolling="no" width="100%" height="252" scrollbars="no" frameBorder="0" />

        <iframe className='song-link' title='link-2'  src="https://audiomack.com/embed/audiogeeksrecordingstudios/song/privacy" scrolling="no" width="100%" height="252" scrollbars="no" frameBorder="0" />
        </div>
    </div>
  )
}

export default Listen