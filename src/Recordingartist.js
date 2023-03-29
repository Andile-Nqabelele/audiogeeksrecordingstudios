import React from 'react'
import './App.css'
import Bgvideo from './Images/pexels-cottonbro-7972014.mp4';

function Recordingartist() {
  return (
    <div className='background-video-section'>
        <video id='bg-video' src={Bgvideo} autoPlay loop muted></video>
        <div className='overlay'>
        <div className='artist-content'>
            <h1 id='artist-header'>Starting out as a new recording artist?</h1>
            <div className='Artist-tips'>
        <div className='artist-tip'>
          <h1 className='ra-header'>1. Learn your passion</h1>
        <p id='recording-p'>
        If you want to become a successful recording artist, you need to be passionate about what you do. Many recording artists begin their love for music from a young age. The sooner you get started, the sooner you can master your musical abilities. Begin to explore different instruments or singing techniques. Eventually, you'll start to figure out what kind of musical abilities you have.
        </p>
        </div>
        <div className='artist-tip'>
          <h1 className='ra-header'>2. Practice consistently</h1>
        <p id='recording-p'>
        While musical talent can come naturally, it also requires a lot of practice. Consider enrolling in instrument instruction or singing lessons to enhance your musical abilities. Working with an instructor or voice coach is an essential part of continuing to grow as a music artist. They have the experience and knowledge to help you perform better. Voice coaches can also share techniques for preserving your voice, which is important when going into long recording sessions.
        </p>
        </div>
        <div className='artist-tip'>
          <h1 className='ra-header'>3. Study music</h1>
        <p id='recording-p'>
        While earning a degree may not be required for this career, it can open you up to all kinds of opportunities and help you continue to enhance your musical abilities. If you want to learn about music fundamentals and develop your skills, consider earning your bachelor's degree in music. Along with getting a formal education, there are plenty of other ways to learn about music. Consider watching video tutorials, purchasing literature or meeting with real musicians. You can also learn quite a bit by exploring different genres of music.
        </p>

        <div id='more-btn'>
        <a href='https://www.indeed.com/career-advice/finding-a-job/how-to-become-recording-artist' id='learn-more'>Learn more</a>
        </div>
        
        </div>
            </div>
        </div>
        
        </div>
        
    </div>
  )
}

export default Recordingartist