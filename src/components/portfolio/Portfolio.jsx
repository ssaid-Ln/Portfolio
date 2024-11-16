import React from 'react'
import coming from  "../../assets/coming.jpg"
import "./portfolio.css"
const Portfolio = () => {
  let list=[{
    id:1,
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
            <img src={coming} alt="coming soon image" />
          </div>
          <h3>Coming Soon</h3>
          <div className="portcta">
          <a href="https://github.com/ssaid-Ln" className='btn'>Github</a>
          <a href="#" className='btn btnpr'>Live Demo</a>
          </div>
        </article>)
})}
        
        
        
      </div>
    </section>
  )
}

export default Portfolio