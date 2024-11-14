import React from 'react'
import {useState} from 'react'
import './navbar.css'
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { FaRegFolderOpen } from "react-icons/fa6";
const Navbar = () => {
    let [active,setActive]=useState('#');
  return (
    <nav>
      <a href="#" onClick={()=>setActive("#")} className={active==='#'?'active' :""}><FaHome className='icon'/></a>  
      <a href="#about" onClick={()=>setActive("#about")} className={active==='#about'?'active' :""}><FaUser className='icon'/></a>  
      <a href="#experience"onClick={()=>setActive("#experience")} className={active==='#experience'?'active' :""}><FaBookOpen className='icon'/></a>  
      <a href="#portfolio"onClick={()=>setActive("#portfolio")} className={active==='#portfolio'?'active' :""}><FaRegFolderOpen/></a> 
      <a href="#contact"onClick={()=>setActive("#contact")} className={active==='#contact'?'active' :""}><FaMessage className='icon'/></a> 
        </nav>
  )
}

export default Navbar