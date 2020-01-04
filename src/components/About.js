import React, { Component } from 'react';
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';


export function About() {
    return (
        <div>
            <Card bg="light" style={{ width: '30rem', display: 'flex', flexDirection: 'row'}}>
                <Card.Img variant="top" src="/canyon.jpg" alt="Hoeun"/>
                <Card.Body style={{position: 'relative', height: '100%', width: '50%', right: '10px'}}>
                  <Card.Title><h3>Hi, I'm Hoeun!</h3></Card.Title>
                  <Card.Text>
                    <p>Experimental Psychology</p>
                    <p>Researcher</p>
                    <p>turned </p>
                    <p>Programmer.</p>
                    <p> I like to explore and make things.</p>
                  </Card.Text>
                </Card.Body>
              </Card>
          <br />
        </div>
    );
}
