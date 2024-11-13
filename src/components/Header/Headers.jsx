import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Headers = () => {
  return (
    <div className="headers">
      <a href="https://fr.linkedin.com/in/said-ioualalen-36b8a924a"><FaLinkedin className="react"/></a>
      <a href="https://github.com/ssaid-Ln"><FaGithub className="react"/></a>
      <a href="https://www.instagram.com/x_sai.d/"><FaInstagram className="react"/></a>
    </div>
  );
};

export default Headers;
