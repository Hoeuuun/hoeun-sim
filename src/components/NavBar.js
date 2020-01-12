import React from 'react';
import styled from 'styled-components';

export function NavBar() {
    const NavItem = props => {
        const pageURL = window.location.pathname+window.location.search
        const liClassName = (props.path === pageURL) ? "nav-item active" : "nav-item";
        return (
            <li className={liClassName}>
                <a href={props.path} className="nav-link">{props.name}</a>
                {(props.path === pageURL) ? (<span className="sr-only">(current)</span>) : ''}
            </li>
        );
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#about">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Resume</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>);
}