import React from "react";
import "./contact.css";
import { MdEmail } from "react-icons/md";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import  { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  let form =useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_92epbam', 'template_4r2mj4y', form.current, "CaFZS9kCdikiMa7Vl"
      )
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contactcontainer">
        <div className="contactoptions">
          <article className="contactoption">
            <MdEmail className="cincon" />
            <h4>Email</h4>
            <h5>ioualalenmohamedsaid@gmail.com</h5>
            <a href="mailto:ioualalenmohamedsaid@gmail.com">Send a massage</a>
          </article>
          <article className="contactoption">
          <FaFacebookMessenger className="cincon" />
            <h4>Messenger</h4>
            <h5>Said Ln</h5>
            <a href="https://www.facebook.com/profile.php?id=100013768683013" target="_blank"
            >Send a massage</a>
          </article>
          <article className="contactoption">
            <FaInstagram className="cincon" />
            <h4>Instagram</h4>
            <h5>x_sai.d</h5>
            <a href="https://www.instagram.com/x_sai.d/" target="_blank">Send a massage</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Name" required/>
          <input type="email" name="email" placeholder="Your email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btnpr">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
