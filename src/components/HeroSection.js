import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import Nyheter from './Nyheter';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video className='hero-video' src='/videos/video-3.mp4' autoPlay loop muted />
      
      <ul className="cards__items">
            <Nyheter
           
              text=" Welcome to Carl-Joar Karlsson's official website! "
              // label="Adventure"
              path="/services"
            />
            </ul>
      {/* <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={() => console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div> */}
    </div>
  );
}

export default HeroSection;