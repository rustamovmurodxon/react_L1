import React from 'react'
import './Cards.css'
import firstCard from '../assets/welcome-3 1 (1).svg'
import secondCard from '../assets/welcome-3 1 (2).svg'
import thirthCard from '../assets/welcome-3 1 (3).svg'
import fourCard from '../assets/welcome-3 1 (4).svg'
import endCard from '../assets/welcome-3 1.svg'

const Cards = () => {
  return (
<div className='cards'>
    <div className='card'>
        <img src={endCard} alt=""/>
        <p><strong><span>Naxly as the Winners in Global Agency Awards</span></strong></p>
        <p>Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.</p>
    </div>
    <div className='card'>
        <img src={firstCard} alt=""/>
        <p><strong><span>Naxly as the Winners in Global Agency Awards</span></strong></p>
        <p>Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.</p>
    </div>
    <div className='card'>
        <img src={secondCard} alt=""/>
        <p><strong><span>Naxly as the Winners in Global Agency Awards</span></strong></p>
        <p>Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.</p>
    </div>
    <div className='card'>
        <img src={thirthCard} alt=""/>
        <p><strong><span>Naxly as the Winners in Global Agency Awards</span></strong></p>
        <p>Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.</p>
    </div>
    <div className='card'>
        <img src={fourCard} alt=""/>
        <p><strong><span>Naxly as the Winners in Global Agency Awards</span></strong></p>
        <p>Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.</p>
    </div>
</div>
)
}

export default Cards