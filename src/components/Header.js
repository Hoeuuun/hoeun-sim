import React, { Component } from 'react';
import styled from 'styled-components';

/* Header image */
const HeroImage = styled.div`
    width: 100vw;
    height: 90vh; 
    
    background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3)), url("sf.jpg");
    
    background-repeat: no-repeat;
    background-size: cover;
    //position: static;
    background-attachment: fixed;
    
 
    position: relative;
    
`;

/* Text in the middle of the image */
const HeroText = styled.div`
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    letter-spacing: 10px;
    font-size: 4rem;
    font-weight: bold;
`;

/* Portfolio button */
const PortfolioButton = styled.button`
    color: #fff;
    font-size: 1rem;
    position: relative;
    white-space: nowrap;
    text-transform: uppercase;
    letter-spacing: 5px;
    cursor: pointer;
    background: transparent;
    margin: 80px auto 0;
    font-weight: 700;
    padding: 12px 26px 12px;
    border: 2px solid #fff;
   
    &:hover, &:active {
        color: #000033;
        border-color: #fff;
        background-color: #fff;
    }
     
`;

export function Header() {
    return (
        <HeroImage>
            <HeroText>
                Hoeun Sim
                <p>
                    <PortfolioButton href="#page-portfolio">
                        See My Portfolio
                    </PortfolioButton>
                </p>
            </HeroText>
        </HeroImage>
    );
}
