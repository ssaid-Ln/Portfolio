import React from 'react'
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Experiences from './components/Experiences/Experiences';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
const App = () => {
  return (
    <>
    <Header/>
    <Navbar/>
    <About/>
    <Experiences/>
    <Portfolio/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
