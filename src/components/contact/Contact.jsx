import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs'

const Contact = () => {
  const [message, setMessage] = useState(false);
  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
    emailjs
      .sendForm(
        'service_k2qawqh',
        'template_c6rkpn6',
        formRef.current,
        'X7K7ebhIeOy3YwHki'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h5>
        I do receive your messages and will respond asap if the valid email is
        provided :)
      </h5>
      <h2>Contact Me</h2>
      
      <div className="container contact__container">
        <div className="contact__options">
          <div className="contact__socials">
          <a href="https://www.linkedin.com/in/muhammad-husni-9b0a041ba/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
          <a href="https://github.com/itshusni29" target="_blank" rel="noreferrer" ><FaGithub /></a>
          <a href="https://www.instagram.com/im.husni/" target="_blank" rel="noreferrer" ><BsInstagram /></a>
          </div>
          <form ref={formRef} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Full Name"
            name="user_name"
            required
          />
          <input
            type="text"
            placeholder="Your Email"
            name="user_email"
            required
          />
          <textarea
            placeholder="Your message"
            rows="7"
            name="message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
        </div>
        
      </div>
    </section>
  );
};

export default Contact;
