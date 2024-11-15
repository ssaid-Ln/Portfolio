import React from 'react'
import "./experiences.css"
import { BsFillPatchCheckFill } from "react-icons/bs";

const Experiences = () => {
  return (
    <section id="experience">
      <h5>The Skills I Have</h5>
      <h2>My Experience</h2>
    <div className="container econtainer">
      <div className="experiencedetail">
    <h3>Frontend Development </h3>
    <div className="experiencecontent">
      <article className="edetails">
        <BsFillPatchCheckFill/>
        <h4>HTML</h4>
      <small className="text-align">Experienced</small>
      </article>
      <article className="edetails">
      <BsFillPatchCheckFill/>
        <h4>CSS</h4>
      <small className="text-align">Experienced</small>
      </article>
      <article className="edetails">
      <BsFillPatchCheckFill/>
        <h4>JAVASCRIPT</h4>
      <small className="text-align">Experienced</small>
      </article>
      <article className="edetails">
      <BsFillPatchCheckFill/>
        <h4>BOOTSTRAP</h4>
      <small className="text-align">Experienced</small>
      </article>
      <article className="edetails">
      <BsFillPatchCheckFill/>
        <h4>TAILWIND</h4>
      <small className="text-align">Intermediate</small>
      </article>
      <article className="edetails">
      <BsFillPatchCheckFill/>
        <h4>REACT</h4>
      <small className="text-align">Intermediate</small>
      </article>
    </div>
      </div>
      <div className="experiencedetail s">
        <h3>Web Scraping</h3>
        <div className="experiencecontent">
      <article className="edetails">
        <BsFillPatchCheckFill/>
        <h4>python</h4>
      <small className="text-align">Experienced</small>
      </article>
      <article className="edetails">
      <BsFillPatchCheckFill/>
        <h4>SELENIUM</h4>
      <small className="text-align">Experienced</small>
      </article>
      <article className="edetails">
      <BsFillPatchCheckFill/>
        <h4>JAVASCRIPT</h4>
      <small className="text-align">Experienced</small>
      </article>
      <article className="edetails">
      <BsFillPatchCheckFill/>
        <h4>MySQL</h4>
      <small className="text-align">Experienced</small>
      </article>
      <article className="edetails">
      <BsFillPatchCheckFill/>
        <h4>PUPPETEER</h4>
      <small className="text-align">Intermediate</small>
      </article>
      </div>
      </div>
    </div>
    </section>
  )
}

export default Experiences