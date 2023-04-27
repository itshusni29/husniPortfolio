import React from 'react';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import ME from '../../assets/husni.png';
import './intro.css';

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3 year</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>Cooming soon</small>
            </article>
          </div>
          <p>Hi, I'm Human Resource Development at PT Yamaha Motor Parts Manufacturing Indonesia and passionate programmer with a strong interest in automations and web development using Python and JavaScript. I find joy in automating tasks and processes to make things faster and more efficient. I've honed my skills in Python and JavaScript and love working on web projects that require both languages. I've worked on various web projects, from creating responsive websites to developing interactive web applications, and I'm always eager to take on new challenges.</p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default Intro