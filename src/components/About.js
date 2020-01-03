import React, { Component } from 'react';
import styled from 'styled-components';

/* Card text */
const CardText = styled.div`
    min-height: 500px;
    text-align: center;
`;

/* Card body */
const CardBody = styled.div`
    position: absolute;
    height: 100%; width: 50%; right: 10px;
    font-size: 30px;
    letter-spacing: 2px;
    overflow-wrap: break-word;
`;

/* Card image */
const CardImg = styled.img`
      border-top-left-radius: calc(.25rem - 1px);
      border-top-right-radius: calc(.25rem - 1px);
      width:100%;
      object-fit: cover;
`;

/* Card image */
const CardHorizontal = styled.div`
    min-height: 500px;
    min-width: 755px;
`;

export function About() {
    return (

        <div>
               <CardHorizontal>
               <CardImg src="/canyon.jpg" alt="Hoeun"/>
                <CardBody>
                  <CardText>
                    <h3>Hi, I'm Hoeun!</h3>
                             <p>Experimental Psychology</p>
                             <p>Researcher</p>
                             <p>turned </p>
                             <p>Programmer.</p>
                             <p> I like to explore and make things.</p>
                   </CardText>
                </CardBody>
                </CardHorizontal>

        </div>
    );
}

//         <div class="container">
//                 <div class="row">
//                         <div class="card horizontal">
//                             <img class="card-img-top" src="images/home/canyon.jpg" alt="Hoeun">
//                             <div class="card-body">
//                                 <h3 class="card-text">
//                                    <br>Hi, I'm Hoeun!<br><br><br></h3>
//                                 <p class="small">Experimental Psychology</p>
//                                 <p class="thick">Researcher</p>
//                                 <p class ="small">turned </p>
//                                 <p class="thick">Programmer.<br> </p>
//                                 <p class="smallest"> I like to explore and make things.</p><br>
//
//                             </div>
//                         </div>
//                     </div>
//             </div>