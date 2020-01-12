import React, { Component } from 'react';
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';

const GreenText = styled.p`
    font-size: 2vw;
    color: #00b386;
    letter-spacing: 1.5px;
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

export function About() {
    return (
        <div>
            <Card bg="white" style={{ margin: '2rem', display: 'flex', flexDirection: 'row'}}>
                <Card.Img variant="left" src="/canyon.jpg" alt="Hoeun" width="50%"/>
                <Card.Body style={{position: 'relative'}}>
                  <Card.Title><TitleText>Hi, I'm Hoeun!</TitleText></Card.Title>
                  <Card.Text>
                    <SmallText>Experimental Psychology</SmallText>
                    <BoldText>Researcher</BoldText>
                    <SmallText>turned </SmallText>
                    <BoldText>Programmer.</BoldText>
                    <GreenText> I like to explore and make things.</GreenText>
                  </Card.Text>
                </Card.Body>
              </Card>
        </div>
    );
}