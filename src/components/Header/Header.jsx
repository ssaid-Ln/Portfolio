import React from "react";
import "./header.css";
import "../../index.css";
import Headerp from "./Headerp"
import Headers from "./Headers"
import me from "../../assets/me.png"

const Header = () => {
  return (
    <header>
      <div className="container">
        <h5>Hello I'm</h5>
        <h1>Said IOUALALEN</h1>
        <h5 className="textlight">Front end developer</h5>
        <Headerp/>
        <Headers/>
        <div className="me">
          <img src={me} alt="img" />
        </div>
        <a href="#contact" className="scroll">Scroll down</a>
      </div>
    </header>
  );
};

export default Header;
