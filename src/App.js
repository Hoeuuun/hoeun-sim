import React, {Component} from 'react';
import {NavBar} from "./components/NavBar";
import {Header} from "./components/Header";
import {About} from "./components/About";
import {Skills} from "./components/Skills";


export default function App() {
  return (
    <div>
        <NavBar/>
        <Header/>
        <About/>
        <Skills/>
    </div>
  );
}
