import React from 'react'
import './About.css'
import about from '../assets/about 4.png'
const About = () => {
  return (
    <div className='about_wrapper'>
        <div className='about_card'>
            <div className='about_img'>
                <img src={about} alt=""/>
            </div>
            <div className='about_text'>
                <h2>Apply AI, Deep Learning and Data Sciece to solve</h2>
                <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                <button>Learn More</button>
            </div>
        </div>
    </div>
)
}

export default About