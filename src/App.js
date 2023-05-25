import React from 'react'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './style.css'

import tips from './tips'

const keys = {
  self: 'Know Yourself',
  opportunity: 'Know Your Opportunity',
  prepared: 'Be Prepared'
}

const settings = {
  className: 'center slides',
  centerMode: true,
  centerPadding: '50px',
  focusOnSelect: true,
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
}

export default function App() {
  return (
    <div className='app'>
      <header className='app-header' key=''>
        <h2>
          Interview Tips and Advice
        </h2>
        <a
          className='app-link'
          href='https://github.com/bramey-git'
        >
          <small>By: BRamey </small>
        </a>
      </header>
      <div className='slide' key={keys.self} style={{backgroundColor: '#DE5B49'}}>
        <h2>Know Yourself!</h2>
        <Slider {...settings}>
          {tips.selfTips.map((advice) => {
            return (
              <div className='wrapper' key={advice.headline}>
                <p>
                  <span> ~ {advice.headline}</span>
                  {advice.tip}
                </p>
              </div>
            );
          })}
        </Slider>
      </div>
      <div className='slide' key={keys.opportunity} style={{backgroundColor: '#977FD7'}} >
        <h2>Know Your Opportunity! </h2>
        <Slider {...settings}>
          {tips.opportunityTips.map((advice) => {
            return (
              <div className='wrapper' key={advice.headline} >
                <p>
                  <span> ~ {advice.headline}</span>
                  {advice.tip}
                </p>
              </div>
            );
          })}
        </Slider>
      </div>
      <div className='slide' key={keys.prepared} style={{backgroundColor: '#C3CB5D'}}>
        <h2>Be Prepared! </h2>
        <Slider {...settings}>
          {tips.preparationTips.map((advice) => {
            return (
              <div className='wrapper' key={advice.headline} >
                <p>
                  <span> ~ {advice.headline}</span>
                  {advice.tip}
                </p>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  )
}
