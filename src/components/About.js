import React, { Component } from 'react';
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';

const ColoredText = styled.p`
    font-size: 2vw;
    color: #00b386;
    letter-spacing: 1.5px;
    color: darkslategrey;
`;

const BoldText = styled.p`
    font-size: 3vw;
    font-weight: bold;
    letter-spacing: 2px;
`;

const SmallText = styled.p`
    font-size: 2.5vw;
`;

const TitleText = styled.p`
    font-weight: normal;
    color: #222;
    letter-spacing: 4px;
    font-size: 3.1vw;
    margin-top: 6vw;
`;

/* Section Title */
export const SectionTitle  = styled.p`
    color: black;
    font-size: .7rem;
    white-space: nowrap;
    text-transform: uppercase;
    letter-spacing: 5px;
    cursor: pointer;
    background: white;
    font-weight: 700;
    padding: 1em 1em 1em 1em;
    border: 2px solid grey;
    width: 6em

    text-align: center;
    position: relative;
    left: 50%;
    bottom: -6em;
    transform: translate(-50%, -40%);
    z-index: 99;
`;

export function About() {
    return (
        <a name="about">
        <SectionTitle>Me</SectionTitle>
        <div>
            <Card bg="white" style={{ margin: '2rem', display: 'flex', flexDirection: 'row'}}>
                <Card.Img variant="left" src="/canyon.jpg" alt="Hoeun" width="50%"/>
                <Card.Body style={{position: 'relative'}}>
                  <Card.Title><TitleText>Hi, I'm Hoeun!</TitleText></Card.Title>
                  <Card.Text>
                    <SmallText>Psychology</SmallText>
                    <BoldText>Researcher</BoldText>
                    <SmallText>turned </SmallText>
                    <BoldText>Programmer.</BoldText>
                    <ColoredText> I like to explore and make things.</ColoredText>
                  </Card.Text>
                </Card.Body>
              </Card>
        </div>

        </a>
    );
}