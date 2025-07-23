import React from 'react';
import './Main.css';
import picture from '../../components/assets/9 1.png';
import firstLogo from '../assets/Group 400.png'
import secondLog from '../assets/Group 401.png'
import trithLogo from '../assets/Group 402.png'
import fourLogo from '../assets/Group 403.png'
import { IoMdPlay } from 'react-icons/io';

const Main = () => {
  return (
    <div className='container main_wrapper'>
        <div className='container main_cards'>
            <div className='container main_card card_text'>
        <p>Next generation platform</p>
        <h1>Artificial intelligence & Cyber security</h1>
        <p>
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
        </p>
        <button>Get Started</button>
        <button>
          Watch Video <IoMdPlay />
        </button>
      </div>

      <div className='container main_card main_img'>
        <img src={picture} alt='' />
      </div></div>
      

      <div className='container partners'>
        <img src={firstLogo} alt='' />
        <img src={secondLog} alt='' />
        <img src={trithLogo} alt='' />
        <img src={fourLogo} alt='' />
      </div>
    </div>
  );
};

export default Main;
