import React from 'react'
import img from '../assets/about3 1.png'
import './Continue.css'
const Continue = () => {
  return (
    <div>
        <div className='con'>
            <div className='card_1'>
                <h1>What our clients say about our awesome solutions</h1>
                <p>To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it who do not know.</p><br/>
                <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing .</p><br/>
                <p>Lorem ipsum is placeholder previewing layouts and visual mockups.</p><br/>
                <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
            </div>
            <div className='card_2'>
                <img src={img} alt=""/>
            </div>
        </div>
    </div>
  )
}

export default Continue