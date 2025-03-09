import React from 'react'
import { FaInstagram, FaGithub } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import './footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer-wrapper">
      <div className="footer-content">
        <ul className='links'>
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        
        <div className="footer-socials">
            <a href="https://github.com/ssaid-Ln" aria-label="GitHub">
              <FaGithub className='social-icon'/>
            </a>
            <a href="https://www.instagram.com/x_sai.d/" aria-label="Instagram">
              <FaInstagram className='social-icon'/>
            </a>
            <a href="https://www.facebook.com/profile.php?id=100013768683013" aria-label="Facebook">
              <IoLogoFacebook className='social-icon'/>
            </a>
        </div>
        
        <div className='copyright'>
          <p>&copy; {currentYear} All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer