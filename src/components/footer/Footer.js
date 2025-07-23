import React from 'react'
import logo from "../assets/Group 396.svg"
import message from "../assets/footer/message.svg"
import tel from "../assets/footer/tel.svg"
import location from "../assets/footer/locataion.svg"
import facebook from "../assets/footer/facebook.svg"
import instagram from "../assets/footer/instagram.svg"
import swith from "../assets/footer/swith.svg"
import linkd from "../assets/footer/linkidin.svg"
import youtobe from "../assets/footer/youtobe.svg"
import './Footer.css'

const Footer = () => {
  return (
    <div>
        <div className='footer'>
            <div>
                <ul>
                    <img src={logo} alt=""/>
                    <p><strong>Aritificial Intelligence</strong></p>
                    <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and layouts and visual mockups.</p>
                    <li><img src={message} alt=""/>Company@gmail.com.com</li>
                    <li><img src={tel} alt=""/>Phone: (064) 332-1233</li>
                    <li><img src={location} alt=""/>450 Wall Street, USA, New York</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li style={{color:"white"}}>INFORMATION</li>
                    <li>New Collection</li>
                    <li>About Store</li>
                    <li>Contact Us</li>
                    <li>Latest News</li>
                    <li>Our Sitemap</li>
                    <li>Orders History</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li style={{color:"white"}}>FOOTER MENU</li>
                    <li>Instagram profile</li>
                    <li>New Collection</li>
                    <li>Contact Us</li>
                    <li>Latest News</li>
                    <li>Terms & Conditions</li>
                    <li>Purchase Theme</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li style={{color:"white"}}>USEFUL LINKS</li>
                    <li>Instagram profile</li>
                    <li>New Collection</li>
                    <li>Contact Us</li>
                    <li>Latest News</li>
                    <li>Terms & Conditions</li>
                    <li>Purchase Theme</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li style={{color:"white"}}>ABOUT THE STORE</li>
                    <li>Lorem ipsum is placeholder text commonly used in the graphic, print, and layouts and visual mockups.</li>
                    <li>www.company.com</li>
                </ul>
                <div>
                    <img src={facebook} alt=""/>
                    <img src={instagram} alt=""/>
                    <img src={swith} alt=""/>
                    <img src={linkd} alt=""/>
                    <img src={youtobe} alt=""/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer