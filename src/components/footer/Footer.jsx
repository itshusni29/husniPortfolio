import React from 'react';
import './footer.css';
import styled, { keyframes } from 'styled-components';

const hue = keyframes`
  from {
    filter: hue-rotate(0deg);
  }
  to {
    filter: hue-rotate(-360deg);
  }
`;

const Foot = styled.a`
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

const Footer = () => {
  
  let getYear = () => {
    let currentYear = new Date().getFullYear();
    return currentYear;
  };
  
  return (
    <footer>
      <Foot href="#home">Muhammad Husni</Foot>
      <ul className="permalinks">
      <small className='small'>&copy; ET {getYear()}. All rights reserved.</small>
      </ul>
    </footer>
  )
}

export default Footer
