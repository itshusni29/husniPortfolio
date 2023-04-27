import React from 'react';
import CTA from './CTA';
import styled, { keyframes } from 'styled-components';
import './header.css';

import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs'

const hue = keyframes`
  from {
    filter: hue-rotate(0deg);
  }
  to {
    filter: hue-rotate(-360deg);
  }
`;

const Heading = styled.h1`
  color: #f35626;
  background-image: linear-gradient(92deg, #f35626, #feab3a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${hue} 10s infinite linear;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-feature-settings: "kern";
  font-size: 48px;
  font-weight: 700;
  line-height: 1.2;
  overflow-wrap: break-word;
  text-align: center;
  text-rendering: optimizeLegibility;
`;


const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <Heading>Muhamamd Husni</Heading>
        <h5 className="text-light">Full-stack Developer</h5>
        <div className="header__socials-icon">
          <a href="https://www.linkedin.com/in/muhammad-husni-9b0a041ba/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
          <a href="https://github.com/itshusni29" target="_blank" rel="noreferrer" ><FaGithub /></a>
          <a href="https://www.instagram.com/im.husni/" target="_blank" rel="noreferrer" ><BsInstagram /></a>
          </div>
        
        <CTA />
      </div>
    </header>
  );
};

export default Header;
