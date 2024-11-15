import React from "react";
import "./About.css";
import me from "../../assets/me2.png";
import { FaAward } from "react-icons/fa6";
const About = () => {
  return (
    <section id="about">
      <h5>Get to know </h5>
      <h2>About me </h2>

      <div className="container acontainer">
        <div className="aboutme">
          <div className="me2">
            <img src={me} alt="image of me" />
          </div>
        </div>
      
      <div className="aboutc">
        <div className="cards">
          <article className="card">
          <FaAward className="aicon"/>
          <h5>Experience </h5>
          <small>2+ Years working</small>
          </article>
          <article className="card">
          <FaAward className="aicon"/>
          <h5>Projects  </h5>
          <small>10+ Completed</small>
          </article>
        </div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis ex eveniet nulla hic sit perferendis molestiae temporibus asperiores, natus ipsam porro nobis! Repellat rem, accusamus aspernatur quis sed vel sint!
          </p>
          <a href="#contact" className="btn btnpr">Let's Talk</a>
      </div>
      </div>
    </section>
  );
};

export default About;
