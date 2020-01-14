import React, { Component } from 'react';
import {PortfolioButton} from "./Header";
import styled from 'styled-components';
import {SectionTitle} from "./About";

const ContactButton = styled(PortfolioButton)`
  color: black;   
  border: 2px solid black;
  text-transform: none;
  padding: 2em 2em 2em 0.5em;
   &:hover, &:active {
    color: white;
    border-color: black;
    background-color: lightgray;
  }
`;

const SectTitle = styled(SectionTitle)`
 padding: 1.5em 9em 1.5em 1.5em;
  
`;

export function Contact() {
    return (
        <a name="contact">
            <SectTitle>Contact</SectTitle>
        <div style={{backgroundColor: 'lightgrey'}}>
            <a href="https://www.linkedin.com/in/hoeun-sim-9b195435/" target="_blank">
                <ContactButton
                    style={{width: '50%',
                            marginTop: '10em',
                            marginLeft: '25%',
                            marginBottom: '5em',
                            justifyContent: 'center'}}>
                    Let's get in touch.
                </ContactButton>
            </a>
            <p>

                <a href="https://www.linkedin.com/in/hoeun-sim-9b195435/" target="_blank">
                    <img src="/linkedin.jpg" alt="LinkedIn" height='70em'/>
                </a>
            </p>
        </div>
        </a>
    );
}
