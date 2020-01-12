import React, {Component} from 'react';
import {NavBar} from "./components/NavBar";
import {Header} from "./components/Header";
import {About} from "./components/About";
import {Contact} from "./components/Contact";
import {Footer} from "./components/Footer";



export default function App() {
  return (
    <div>
        <NavBar/>
        <Header/>
        <About/>
        <Contact/>
        <Footer/>>
    </div>
  );
}
