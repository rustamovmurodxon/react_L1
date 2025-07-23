import React from 'react'
import './Navb.css'
import logo from "../assets/Group 396.svg"
const Navb = () => {
  return (
    <nav className="navbar">
    <div className="navbar-left">
      <img src={logo} alt="Logo" className="logo" />
      <span className="brand-name">
        <span className="highlight">Artificial</span> Intelligence
      </span>
    </div>
    <ul className="nav-links">
      <li>Home</li>
      <li>About</li>
      <li>Services</li>
      <li>Blog</li>
      <li>Contact</li>
    </ul>
    <button className="sign-in-btn">Sign In</button>
  </nav>
  )
}

export default Navb