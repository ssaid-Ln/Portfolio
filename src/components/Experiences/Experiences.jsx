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
        <BsFillPatchCheckFill className='eicon'/>
        <div>
          
        <h4>HTML</h4>
      <small className="text-align">Experienced</small>
        </div>
      </article>
      <article className="edetails">
      <BsFillPatchCheckFill className='eicon'/>
       <div>
        <h4>CSS</h4>
      <small className="text-align">Experienced</small>
        </div> 
      </article>
      <article className="edetails">
      <BsFillPatchCheckFill className='eicon'/>
        <div>

        <h4>JAVASCRIPT</h4>
      <small className="text-align">Experienced</small>
        </div>
      </article>
      <article className="edetails">
      <BsFillPatchCheckFill className='eicon'/>
        <div>
          <h4>BOOTSTRAP</h4>
      <small className="text-align">Experienced</small>
          </div>
      </article>
      <article className="edetails">
      <BsFillPatchCheckFill className='eicon'/>
        <div>
          <h4>REACT</h4>
      <small className="text-align">Intermediate</small>
          </div>
      </article>
    </div>
      </div>
      <div className="experiencedetail s">
        <h3>Backend Development</h3>
        <div className="experiencecontent">
      <article className="edetails">
        <BsFillPatchCheckFill className='eicon'/>
        <div>
          <h4>php</h4>
      <small className="text-align">Experienced</small>
          </div>
      </article>
      <article className="edetails">
      <BsFillPatchCheckFill className='eicon'/>
        <div>
          <h4>python</h4>
      <small className="text-align">Experienced</small>
          </div>
      </article>
      <article className="edetails">
      <BsFillPatchCheckFill className='eicon'/>
       <div>
         <h4>django</h4>
      <small className="text-align">Intermediate</small>
        </div>
      </article>
      <article className="edetails">
      <BsFillPatchCheckFill className='eicon'/>
        <div> 
      <h4>MySQL</h4>
      <small className="text-align">Experienced</small>
      </div>
      </article>
      </div>
      </div>
    </div>
    </section>
  )
}

export default Experiences