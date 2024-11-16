import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import './footer.css'
const Footer = () => {
  return (
    <footer>
        <ul className='links'>
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="footersocials">
            <a href="https://github.com/ssaid-Ln"><FaGithub className='giticon'/></a>
            <a href="https://www.instagram.com/x_sai.d/"><FaInstagram className='insicon'/></a>
            <a href="https://www.facebook.com/profile.php?id=100013768683013"><IoLogoFacebook className='facicon'/></a>
        </div>
        <div className='copyright'>
        <h3>&copy; All rights reserved</h3>
        </div>
        
    </footer>
  )
}

export default Footer