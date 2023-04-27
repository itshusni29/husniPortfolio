import React from 'react';
import { FaBootstrap } from 'react-icons/fa';
import { FaPython } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { FaDocker } from 'react-icons/fa';
import { DiJavascript1 } from 'react-icons/di';
import { DiCss3 } from 'react-icons/di';
import { DiMysql } from 'react-icons/di';
import { SiDjango } from 'react-icons/si';
import './experience.css';

const Experience = () => {
  return (
    <section id="experience">
      <h5>The Skills I Have</h5>
      <h2>Skills</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <div className="experience__content">
          <article className="experience__details">
              <FaPython className="experience__details-icon" />
              <h4>Python</h4>
            </article>
            <article className="experience__details">
              <DiJavascript1 className="experience__details-icon" />
              <h4>JsvsScript</h4>
            </article>
            <article className="experience__details">
              <SiDjango className="experience__details-icon" />
              <h4>Django</h4>
            </article>
            <article className="experience__details">
              <FaReact className="experience__details-icon" />
              <h4>React</h4>
            </article>
            <article className="experience__details">
              <DiCss3 className="experience__details-icon" />
              <h4>CSS</h4>
            </article>
            <article className="experience__details">
              <DiMysql className="experience__details-icon" />
              <h4>Mysql</h4>
            </article>
            <article className="experience__details">
              <FaBootstrap className="experience__details-icon" />
              <h4>Bootsrtap</h4>
            </article>
            <article className="experience__details">
              <FaDocker className="experience__details-icon" />
              <h4>Docker</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience