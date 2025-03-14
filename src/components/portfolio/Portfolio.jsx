import React from 'react'
import coming from  "../../assets/coming.jpg"
import captcha from "../../assets/captcha-game.jpg"
import demineur from"../../assets/demineur.jpg"
import game2048 from "../../assets/2048.jpg"
import e_commerce from "../../assets/e-commerce.png"
import "./portfolio.css"
const Portfolio = () => {
  let list=[{
    id:1,
    urlimage :captcha,
    title:"captcha-game",
    giturl:"https://github.com/ssaid-Ln/Captcha-game",
    demourl:"https://ssaid-ln.github.io/Captcha-game/"
  },
  {
    id:2,
    urlimage :demineur,
    title:"Minesweeper",
    giturl:"https://github.com/ssaid-Ln/Minesweeper",
  },{
    id:3,
    urlimage :game2048,
    title:"2048-game",
    giturl:"https://github.com/ssaid-Ln/2048-game",
  },
  {
    id:4,
    urlimage :e_commerce,
    title:"E-Commerce-App",
    giturl:"https://github.com/ssaid-Ln/e-commerce-website",
  },
  {
    id:5,
    urlimage :coming,
    title:"coming soon",
    giturl:"https://github.com/ssaid-Ln",
    demourl:"#"
  }]
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portcontainer">
       { list.map(({id,urlimage,title,giturl,demourl}) => {
        return(
        <article className='portitem'>
          <div className="portimage">
            <img src={urlimage} alt="coming soon image" />
          </div>
          <h3>{title}</h3>
          <div className="portcta">
          <a href={giturl} className='btn'>Github</a>
          {demourl &&  <a href={demourl} className='btn btnpr'>Live Demo</a>}
          </div>
        </article>)
})}
        
        
        
      </div>
    </section>
  )
}

export default Portfolio